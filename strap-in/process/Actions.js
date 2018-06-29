
class Action {
    constructor (actionName, options) {
        this.name = actionName;
        this._options = options;
    }

    get _ () {
        return this._options;
    }
}

Object.assign(Action, {
    IMPORT: 'import',
    VARIABLE_DECLARATION: 'variable-declaration',
});


module.exports = {
    Action: Action,

    NativeImport: function (module) {
        return new Action(Action.IMPORT, {native: true, module: module});
    },
    ModuleImport: function (module) {
        return new Action(Action.IMPORT, {native: false, module: module});
    },
    VariableDeclaration: function (variableName, variableType, value) {
        return new Action(Action.VARIABLE_DECLARATION, {name: variableName, type: variableType, value: value})
    }
};