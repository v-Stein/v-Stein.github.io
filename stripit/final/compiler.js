const Lexer = require('./lexer/lexer');
const TreeBuilder = require('./tree/builder');
const SyntaxParser = require('./syntax/parser');
const fs = require('fs');


class Compiler {
    constructor () {
        this.lexer = new Lexer();
        this.treeBuilder = new TreeBuilder();
        this.syntaxParser = new SyntaxParser();
    }

    compile (file, encoding = 'utf-8') {
        let content = fs.readFileSync(file, encoding);

        this._runSyntaxParser(
            this._runTreeBuilder(
                this._runLexer(content)
            )
        )
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