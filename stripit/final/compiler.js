const Lexer = require('./lexer/lexer');
const TreeBuilder = require('./tree/builder');
const SyntaxParser = require('./syntax/parser');
const fs = require('fs');
const path = require('path');
const { exec } = require('child_process');


class Compiler {
    constructor () {
        this.baseDir = null;

        this.lexer = new Lexer();
        this.treeBuilder = new TreeBuilder();
        this.syntaxParser = new SyntaxParser();
    }

    compile (file, out, encoding = 'utf-8') {
        this.baseDir = path.dirname(path.resolve(file));
        this.syntaxParser.setBaseDir(this.baseDir);

        let content = fs.readFileSync(file, encoding);
        let result = this._runSyntaxParser(
            this._runTreeBuilder(
                this._runLexer(content)
            )
        );

        fs.writeFileSync('./temp.cc', result);

        exec('gcc ./temp.cc -o ' + out + ' -lstdc++ -std=c++14', (err, stdout, stderr) => {
            if (err) {
                console.error(err);
                return;
            }

            fs.unlinkSync('./temp.cc');
        });
    }

    _runLexer (content) {
        this.lexer.input(content);
        return this.lexer.lexAll();
    }

    _runTreeBuilder (tokens) {
        this.treeBuilder.input(tokens);
        this.treeBuilder.createTree();
        return this.treeBuilder.getTree();
    }

    _runSyntaxParser (tree) {
        this.syntaxParser.input(tree);
        this.syntaxParser.parseTree();
        return this.syntaxParser.getFile();
    }
}


module.exports = Compiler;