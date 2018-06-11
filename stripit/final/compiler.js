const Lexer = require('./lexer/lexer');
const TreeBuilder = require('./tree/builder');
const SyntaxParser = require('./syntax/parser');
const fs = require('fs');
const { exec } = require('child_process');


class Compiler {
    constructor () {
        this.lexer = new Lexer();
        this.treeBuilder = new TreeBuilder();
        this.syntaxParser = new SyntaxParser();
    }

    compile (file, out, encoding = 'utf-8') {
        let content = fs.readFileSync(file, encoding);

<<<<<<< HEAD
        this._runSyntaxParser(
            this._runTreeBuilder(
                this._runLexer(content)
            )
        )
=======
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

            // fs.unlinkSync('./temp.cc');
        });
>>>>>>> 917ce1b30ab33161429a99720209f154cefe9361
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