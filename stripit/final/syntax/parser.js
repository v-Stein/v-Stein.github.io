const
    fs = require('fs'),
    path = require('path');


class SyntaxParser {
    constructor () {
        this.tree   = {};
        this.result = '';
        this.builtins = {};

        this._registerBuiltins();
    }

    /**
     * Registers all existing builtin modules from './builtins' folder
     *
     * @private
     */
    _registerBuiltins () {
        let dir = path.join(__dirname, '../', 'builtins');
        let files = fs.readdirSync(dir);
        for (let file of files) {
            let builtinName = file.substring(0, file.lastIndexOf('.'));

            this.builtins[builtinName] = fs.readFileSync(path.join(dir, file), 'utf-8')
        }
    }

    /**
     * Writes a text on a line
     *
     * @param text
     * @returns {SyntaxParser}
     * @private
     */
    _write (text = '') {
        this.result += text;

        return this;
    }

    /**
     * Writes a text and adds a new line
     *
     * @param text
     * @returns {SyntaxParser}
     * @private
     */
    _writeLine (text = '') {
        this.result += text + '\n';

        return this;
    }

    /**
     * Adds a desired number of whitespace (mostly used for indent)
     *
     * @param nb
     * @returns {SyntaxParser}
     * @private
     */
    _whiteSpace (nb = 1) {
        while (nb) {
            this._write(' ');
            nb--;
        }
        return this;
    }

    /**
     * Adds the header part of the file (where imports and typedef are written)
     *
     * @returns {SyntaxParser}
     * @private
     */
    _addHeaders () {
        return this
            ._writeLine('#include <iostream>')
            ._writeLine()
            ._writeLine('typedef std::string String;')
            ._writeLine('typedef int Int;')
            ._writeLine('typedef char Char;')
            ._writeLine();
    }

    _addBuiltinImports () {
        for (let builtin of this.tree.builtinImports) {
            this._addBuiltinImport(builtin);
        }
    }

    _addBuiltinImport (builtin) {
        if (! (builtin in this.builtins)) throw Error('Unkown builtin module "' + builtin + '"');

        this._writeLine(this.builtins[builtin]);
    }

    _addModuleImports () {
        for (let module of this.tree.moduleImports) {
            this._addModuleImport(module);
        }
    }

    _addModuleImport () {
        // TODO: Implement module importing
    }

    _addClasses () {
        for (let className in this.tree.classes) {
            if (this.tree.classes.hasOwnProperty(className)) {
                this._addClass(className, this.tree.classes[className]);
            }
        }
    }

    _addClass (className, definition) {
        this._write('class ' + className);
        if (definition.inherits) {
            this._write(': public ' + definition.inherits);
        }
        this._writeLine(' {');

        this._addPrivate(definition.private);
        this._addProtected(definition.protected);
        this._addPublic(definition.public);

        this._writeLine('};')._writeLine();
    }

    _addPrivate (definition) {
        if (Object.keys(definition.methods).length || Object.keys(definition.properties).length) {
            this._whiteSpace(4)._writeLine('private:');

            this._addProperties(definition.properties);
            this._addMethods(definition.methods);
        }
    }

    _addProtected (definition) {
        if (Object.keys(definition.methods).length || Object.keys(definition.properties).length) {
            this._whiteSpace(4)._writeLine('protected:');

            this._addProperties(definition.properties);
            this._addMethods(definition.methods);
        }
    }

    _addPublic (definition) {
        if (Object.keys(definition.methods).length || Object.keys(definition.properties).length) {
            this._whiteSpace(4)._writeLine('public:');

            this._addProperties(definition.properties);
            this._addMethods(definition.methods);
        }
    }

    _addProperties (definition) {
        for (let propertyName in definition) {
            if (definition.hasOwnProperty(propertyName)) {
                this._addProperty(propertyName, definition[propertyName]);
            }
        }
    }

    _addProperty (name, definition) {
        let type        = definition.type,
            constant    = definition.constant,
            value       = definition.value;

        this._whiteSpace(8);

        if (constant) {
            this._write('const ');
        }
        this._write(type)._write(' ')._write(name);

        if (value) {
            this._write(' = ')._write(value);
        }
        this._writeLine(';');
    }

    _addMethods (definition) {
        for(let methodName in definition) {
            if (definition.hasOwnProperty(methodName)) {
                this._addMethod(methodName, definition[methodName]);
            }
        }
    }

    _addMethod (name, definition) {
        this
            ._whiteSpace(8)
            ._write(definition.returnType)
            ._whiteSpace()
            ._write(name)
            ._whiteSpace();

        this._addParameters(definition.parameters);

        this._writeLine(' {');

        this._addExpressions(definition.expressions);

        this._whiteSpace(8)._writeLine('}');
    }

    _addParameters (parameters) {
        this._write('(');

        for (let i = 0; i < parameters.length; i++) {
            let param = parameters[i];

            this._write(param.type)._write(' ')._write(param.name);

            if (i !== parameters.length - 1) {
                this._write(', ');
            }
        }

        this._write(')');
    }

    _addExpressions (expressions) {
        for (let expression of expressions) {
            this._whiteSpace(12)
                ._addExpression(expression);
        }
    }

    _addExpression (expression) {
        switch(expression.type) {
            case 'assignement':
                this._addAssignementExpression(expression);
                break;
            case 'call':
                this._addCallExpression(expression.statement);
                break;
            case 'return':
                this._addReturnExpression(expression.statement);
                break;
            default:
                throw Error('Unrecognized expression');
        }
    }

    _addAssignementExpression (expression) {
        this._addLeftHandedExpression(expression.leftHanded);
        this._write(' = ');
        this._addRightHandedExpression(expression.rightHanded);
        this._writeLine(';');
    }

    _addCallExpression (expression) {
        this._addRightHandedExpression(expression);
        this._writeLine(';');
    }

    _addReturnExpression (expression) {
        this._write('return ');
        this._addRightHandedExpression(expression);
        this._writeLine(';');
    }

    _addLeftHandedExpression (tokens) {
        if (tokens.length > 3) throw Error('Invalid left handed statement');

        let firstToken = tokens[0];

        if (firstToken.type === 'EXCLAMATION') {
            // Constant
            this._write('const ');
            this._write(tokens[1].value)._write(' ')._write(tokens[2].value);
        }
        else {
            this._addRightHandedExpression(tokens);
        }
    }

    _addRightHandedExpression (tokens) {
        for (let i = 0; i < tokens.length; i++) {
            let token = tokens[i],
                previousToken = {},
                nextToken = {};

            if (i) previousToken = tokens[i - 1];
            if (i !== tokens.length -1) nextToken = tokens[i + 1];

            if (token.type === 'PERIOD' && previousToken.type === 'IDENTIFIER' && previousToken.value === 'this') {
                this._write('->');
            }
            else {
                this._write(token.value);
                if (token.type !== 'PERIOD' && nextToken.type !== 'PERIOD' && i !== tokens.length - 1 && token.type !== 'L_PAREN' && token.type !== 'R_PAREN' && nextToken.type !== 'L_PAREN' && nextToken.type !== 'R_PAREN') {
                    this._whiteSpace();
                }
            }
        }
    }

    _addFileEnding () {
        this._writeLine('int main () {')
            ._writeLine('    Main main;')
            ._writeLine('    return main.main();')
            ._writeLine('}');
    }

    input (tree) {
        this.tree = tree;
        this.result = '';
    }

    parseTree () {
        this._addHeaders();
        this._addBuiltinImports();
        this._addModuleImports();
        this._addClasses();
        this._addFileEnding();
    }

    getFile () {
        return this.result;
    }
}


module.exports = SyntaxParser;