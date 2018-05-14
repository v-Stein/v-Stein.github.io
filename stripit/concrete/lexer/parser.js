const   fs = require('fs'),
        path = require('path');

const Lexer         = require('./lexer');
const TokenTypes    = require('./_TokenTypes');

const builtins = {};

let files = fs.readdirSync(path.join(__dirname, 'builtins'));

for (let file of files) {
    builtins[file] = fs.readFileSync(path.join(__dirname, 'builtins', file), 'utf-8');
}


class Parser {
    constructor () {
        this.lexer          = new Lexer();
        this.tokens         = [];
        this.tokensLength   = 0;
        this.pos            = 0;
        this.resultingFile  = '';
    }

    input (file, encoding = 'utf-8') {
        let fileContent = fs.readFileSync(file, encoding);

        this.lexer.input(fileContent);

        this.tokens         = this.lexer.lexAll();
        this.tokensLength   = this.tokens.length;
    }

    addToResultingFile (some) {
        this.resultingFile += some;
    }

    addHeaderLine () {
        this.addToResultingFile('#include <iostream>\n');
    }

    getTokenAt (position) {
        return this.tokens[position];
    }

    parseImportLine (firstPos) {
        let using = this.getTokenAt(firstPos);
        let second = this.getTokenAt(firstPos + 1);

        if (second.name === TokenTypes.AT) { // Builtin import
            let nameToken = this.getTokenAt(firstPos + 2);
            if (nameToken.name !== TokenTypes.IDENTIFIER) throw Error('Unexpected token at ' + nameToken.value);

            let semiToken = this.getTokenAt(firstPos + 3);
            if (semiToken.name !== TokenTypes.SEMI) throw Error('Unexpected end of expression. Expected ";" at end of expression');

            let builtinFileName = nameToken.value + '.cc';

            if (! (builtinFileName in builtins)) throw Error('Unknown builtin "' + nameToken.value + '"');

            this.addToResultingFile(builtins[builtinFileName]);

            return firstPos + 4;
        }
        else {
            if (second.name !== TokenTypes.QUOTE) throw Error('Unexpected token at ' + second.value);

            let semiToken = this.getTokenAt(firstPos + 2);
            if (semiToken.name !== TokenTypes.SEMI) throw Error('Unexpected end of expression. Expected ";" at end of expression');

            let name = second.value;

            let parser = new Parser();
            parser.input(name);
            parser.parse();

            this.addToResultingFile(parser.resultingFile);

            return firstPos + 3;
        }
    }

    parseClassDeclaration (firstPos) {
        let classKeyword = this.getTokenAt(firstPos);

        let classNameToken = this.getTokenAt(firstPos + 1);
        let inheritanceToken = null;

        if (classNameToken.name !== TokenTypes.IDENTIFIER) throw Error('Unexpected token "' + classNameToken.value + '"');
        if (classNameToken.value.charAt(0).toUpperCase() !== classNameToken.value.charAt(0)) throw Error('Illegal class name "' + classNameToken.value + '": class names should have the first letter in uppercase.');

        let nextToken = this.getTokenAt(firstPos + 2);

        if (nextToken.name === TokenTypes.L_ANG) { // Inheritance
            inheritanceToken = this.getTokenAt(firstPos + 3);

            if (inheritanceToken.name !== TokenTypes.IDENTIFIER) throw Error('Unexpected token "' + inheritanceToken.value + '"');

            nextToken = this.getTokenAt(firstPos + 4);
        }
        if (nextToken.name === TokenTypes.L_BRACE) {

            this.addToResultingFile('class ' + classNameToken.value);
            if (inheritanceToken) this.addToResultingFile(': public ' + inheritanceToken.value);

        }
        else {
            throw Error('Unexpected token ' + nextToken.value)
        }
    }

    parseLine (firstPos) {
        let firstToken = this.getTokenAt(firstPos);

        if (firstToken.name === TokenTypes.LINE_COMMENT || firstToken.name === TokenTypes.BLOCK_COMMENT) {
            return firstPos + 1;
        }
        else if (firstToken.name === TokenTypes.IDENTIFIER) { // The first token is an identifier
            if (firstToken.value === 'using') {
                return this.parseImportLine(firstPos);
            }
            if (firstToken.value === 'class') {
                return this.parseClassDeclaration(firstPos);
            }
        }
        else {
            return firstPos + 1;
        }
    }

    parse () {
        this.addHeaderLine();

        while (this.pos <= this.tokensLength) {
            this.pos = this.parseLine(this.pos);
        }
    }
}


module.exports = Parser;