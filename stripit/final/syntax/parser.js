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

        this._write(this.builtins[builtin]);
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
        this._writeLine('{');

        this._addPrivate(definition.private);
        this._addProtected(definition.protected);
        this._addPublic(definition.public);

        this._writeLine('}');
    }

    _addPrivate (definition) {
        this._writeLine('    private:');

        this._addProperties(definition.properties);
        this._addMethods(definition.methods);
    }

    _addProtected (definition) {
        this._writeLine('    protected:');

        this._addProperties(definition.properties);
        this._addMethods(definition.methods);
    }

    _addPublic (definition) {
        this._writeLine('    public:');

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

        if (constant) {
            this._write('const ');
        }
        this._write(type).write(' ').write(name);

        if (value) {
            this._write(' = ').write(value);
        }
        this._write(';');
    }

    _addMethods (definition) {

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