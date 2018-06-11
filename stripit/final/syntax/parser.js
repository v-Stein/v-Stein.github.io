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

    _registerBuiltins () {
        let dir = path.join(__dirname, '../', 'builtins');
        let files = fs.readdirSync(dir);
        for (let file of files) {
            let builtinName = file.substring(0, file.lastIndexOf('.'));

            this.builtins[builtinName] = fs.readFileSync(path.join(dir, file), 'utf-8')
        }
    }

    _write (text) {
        this.result += text;

        return this;
    }

    _writeLine (text) {
        this.result += text + '\n';

        return this;
    }

    _whiteSpace (number = 1) {
        for (let i = 0; i < number; i++) {
            this._write(' ');
        }

        return this;
    }

    _addHeaders () {
        return this
            ._writeLine('#include <iostream>')
            ._writeLine('typedef std::string String;')
            ._writeLine('typedef int Int;')
            ._writeLine('typedef char Char;')
            ._writeLine('');
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
            this._addModuleImport(module)._writeLine('');
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
        this._writeLine('{');

        this._addPrivate(definition.private);
        this._addProtected(definition.protected);
        this._addPublic(definition.public);

        this._writeLine('};')._writeLine('');
    }

    _addPrivate (definition) {
        let nbProperties    = Object.keys(definition.properties).length;
        let nbMethods       = Object.keys(definition.methods).length;

        if (nbProperties || nbMethods) {
            this._writeLine('    private:');
        }

        this._addProperties(definition.properties);
        this._addMethods(definition.methods);
    }

    _addProtected (definition) {
        let nbProperties    = Object.keys(definition.properties).length;
        let nbMethods       = Object.keys(definition.methods).length;

        if (nbProperties || nbMethods) {
            this._writeLine('    protected:');
        }

        this._addProperties(definition.properties);
        this._addMethods(definition.methods);
    }

    _addPublic (definition) {
        let nbProperties    = Object.keys(definition.properties).length;
        let nbMethods       = Object.keys(definition.methods).length;

        if (nbProperties || nbMethods) {
            this._writeLine('    public:');
        }

        this._addProperties(definition.properties);
        this._addMethods(definition.methods);
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
        for (let methodName in definition) {
            if (definition.hasOwnProperty(methodName)) {
                this._addMethod(methodName, definition[methodName]);
            }
        }
    }

    _addMethod (name, definition) {
        let returnType  = definition.returnType,
            parameters  = definition.parameters,
            expressions = definition.expressions;

        this._whiteSpace(8);

        this._write(returnType)._write(' ')._write(name);

        this._addParameters(parameters);

        this._writeLine(' {');

        this._addExpressions(expressions);

        this._whiteSpace(8)._writeLine('}');
    }

    _addParameters (parameters) {
        this._write(' (');

        for (let i = 0; i < parameters.length; i++) {
            this._write(parameters[i].type)._write(' ')._write(parameters[i].name);

            if (i !== parameters.length - 1) this._write(', ');
        }

        this._write(')');
    }

    _addExpressions (expressions) {
        for (let expression of expressions) {
            this._addExpression(expression);
        }
    }

    _addExpression (expression) {
        this._whiteSpace(12);
        switch (expression.type) {
            case 'assignement':
                this._addAssignementExpression(expression);
                break;
            case 'call':
                this._addCallExpression(expression.statement);
                break;
            case 'return':
                this._addReturnExpression(expression.statement);
                break;
        }
    }

    _addAssignementExpression (expression) {
        this._addLeftHandedExpression(expression.leftHanded);
        this._write(' =');
        this._addCallExpression(expression.rightHanded);
    }

    _addLeftHandedExpression (expression) {
        for (let i = 0; i < expression.length; i++) {
            let token = expression[i];

            if (token.type === 'EXCLAMATION') {
                this._write('const');
            }
            else {
                this._write(' ')._write(token.value);
            }
        }
    }

    _addCallExpression (expression) {
        for (let i = 0; i < expression.length; i++) {
            let previousToken   = expression[i - 1],
                token           = expression[i];

            if (token.type === 'PERIOD') {
                if (previousToken && previousToken.type === 'IDENTIFIER' && previousToken.value === 'this') {
                    this._write('->');
                }
                else {
                    this._write('.');
                }
            }
            else {
                if (previousToken && previousToken.type !== 'PERIOD') {
                    this._whiteSpace();
                }
                this._write(token.value);
            }
        }
        this._writeLine(';');
    }

    _addReturnExpression (expression) {
        this._write('return ');

        this._addCallExpression(expression);
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