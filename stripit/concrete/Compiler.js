const Lexer = require('./lexer/lexer');
const TreeBuilder = require('./tree/builder');
const TreeParser = require('./tree/parser');

const fs = require('fs');


class Compiler {
    constructor () {
        this.lexer          = new Lexer();
        this.treeBuilder    = new TreeBuilder();
        this.treeParser     = new TreeParser();
    }

    compile (file, encoding = 'utf-8') {
        let content = fs.readFileSync(file, encoding);
        try {
            // this._runTreeParser(
            this._runTreeBuilder(
                this._runLexer(content)
            )
            // );
        }
        catch (error) {
            console.log(error.code, error.params, error.toString());
        }
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

    _runTreeParser (tree) {
        this.treeParser.input(tree);
        this.treeParser.parseTree();
        return this.treeParser.getFile();
    }
}

module.exports = Compiler;