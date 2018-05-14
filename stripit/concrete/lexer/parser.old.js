const   fs      = require('fs'),
        path    = require('path');



class Parser {
    constructor () {
        this.tokens         = [];
        this.position       = 0;
        this._TokenTypes    = require('./_TokenTypes');

        this.resultingFile  = '';
    }

    setTokens (tokens) {
        if (!Array.isArray(tokens)) throw new Error('Tokens must be an Array of Lexer Tokens');

        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i];

            if (! (token.name in this._TokenTypes)) throw new Error('Unknown Token "' + token.name + '"');

            this.tokens.push(token);
        }
    }

    addHeaderLine () {
        this.resultingFile += '#include <iostream>\n';
    }

    getTokenAt (position) {
        return this.tokens[position];
    }

    parseLine (startPos) {
        let firstToken = this.getTokenAt(startPos);
        if (firstToken.name === this._TokenTypes.IDENTIFIER && firstToken.value === 'using') {

            /** Import statement - so we should check if this is a builtin import or not */
            let nextToken = this.getTokenAt(startPos + 1);
            if (nextToken.name === this._TokenTypes.AT) {
                let importName = this.getTokenAt(startPos + 2);
            }
            else if (nextToken.name === this._TokenTypes.QUOTE) {
                console.log('import file ' + nextToken.value);
            }
            else {
                throw Error('Unexpected token ' + nextToken.value + '.')
            }

        }
    }

    parse () {
        this.addHeaderLine();

        this.parseLine(this.position);
    }
}

module.exports = Parser;