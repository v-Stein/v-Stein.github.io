

class Scope {

    constructor (parentScope = null) {
        this.parent = parentScope;

        this.types      = {};
        this.variables  = {};
        this.functions  = {};
        this.classes    = {};
    }

    addType (name, type) {
        this.types[name] = type;
    }

    addVariable (name, variable) {
        this.variables[name] = variable;
    }

    addFunction (name, func) {
        this.functions[name] = func;
    }

    addClass (name, Class) {
        this.classes[name] = Class;
    }

}

module.exports = Scope;