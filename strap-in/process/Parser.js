const Grammar   = require('../token/Grammar');
const Syntaxes  = require('../token/Syntax');
const Token     = require('../token/Token');
const TokenType = require('../token/TokenTypes');
const Keywords  = require('../token/Keywords');
const Action    = require('./Actions');
const Variable  = require('../System/Variable');
const Types     = require('../System/types');


class Parser {

    constructor () {
        this.tokens = [];
    }

    get _ () {
        return Parser;
    }

    input (tokens) {
        this.tokens = tokens;
    }

    tokenAt (position) {
        return this.tokens[position];
    }

    getNextTerminalPosition () {
        let endPosition;

        for(let i = 0; i < this.tokens.length; i++) {
            let token = this.tokenAt(i);

            if (token.isTerminal()) {
                endPosition = i;
                break;
            }
        }

        return endPosition;
    }

    parseSemiExpression (endPosition) {
        let expression = this.tokens.splice(0, endPosition + 1).filter(tk => !tk.isComment());
        let expressionLength = expression.length;

        // Remove unneeded semicolon
        if (expression[expressionLength - 1].isSemiSymbol()) {
            expression.splice(expressionLength - 1, expressionLength)
        }

        // Check if this is an import
        if (this._.isImportExpression(expression)) {
            if (this._.isNativeImport(expression)) { // Check if this is a native import
                let [,, nativeModuleName]   = expression;
                        nativeModuleName    = nativeModuleName.value;

                return Action.NativeImport(nativeModuleName);
            }
            else { // Otherwise we're on a custom module import
                let [,  modulePath] = expression;
                        modulePath  = modulePath.value.replace(/"/g, '');

                return Action.ModuleImport(modulePath);
            }
        }
        // Check if this is a single declaration (no assignement)
        if (this._.isSingleVariableDeclaration(expression)) {
            let [variableType, variableName] = expression.map(o => o.value);

            return Action.VariableDeclaration(
                variableName,
                variableType,
                new Variable(Types.None)
            );
        }
        // Check if this is a assigned declaration (declaration along with value assignement)
        if (this._.isAssignedVariableDeclaration(expression)) {
            let [variableType, variableName, , ...rightHand] = expression;
                [variableType, variableName] = [variableType, variableName].map(o => o.value);

            console.log(rightHand)

            // TODO: Parse right hand expression (that will unlock many things as call expressions,
            // Todo  assignements, methods and functions expressions, ...)
        }
        // Check if this is a constant declaration (declaration along with value assignement)
        if (this._.isConstantDeclaration(expression)) {
            console.log('Constant declaration');
            let [, constantType, constantName, , ...rightHand] = expression;
                [constantType, constantName] = [constantType, constantName].map(o => o.value);

            console.log(rightHand)

            // TODO: Parse right hand expression (that will unlock many things as call expressions,
            // Todo  assignements, methods and functions expressions, ...)
        }
    }

    parseBlockExpression (endPosition) {
        let expression = this.tokens.splice(0, endPosition + 1).filter(tk => !tk.isComment());
        console.log(expression);
        
        // TODO: Parse block expresssions and their block scope then mix it together
        // Todo  But be careful, not all block expressions have a block scope :
        // Todo    - Classes have a class scope (a scope that differentiates private, protected
        // Todo      and public properties, methods and functions)
        // Todo    - Iterative structures and conditional structures do not have a scope,
        // Todo      their block is special (because it can be ignored or looped)
        // Todo      but not scoped
        // Todo    - In fact, only methods and functions have a regular block scope
    }

    parseNextExpression () {
        let expressionEndPosition   = this.getNextTerminalPosition();
        let endToken                = this.tokenAt(expressionEndPosition);

        if (endToken.isSemiSymbol()) {
            return this.parseSemiExpression(expressionEndPosition);
        }
        else if (endToken.isL_BraceSymbol()) {
            return this.parseBlockExpression(expressionEndPosition);
        }
    }

    static isImportExpression (expression) {
        let lengthIsValid                   = false;
        let lastTokenIsIdentifierOrString   = false;

        if (expression.length < 2) return false;

        let usingTokenIsPresent = expression[0].isUsingKeyword();
        let isNativeImport      = expression[1].isAtSymbol();

        if (isNativeImport) {
            lengthIsValid                   = expression.length === 3;
            lastTokenIsIdentifierOrString   = expression[expression.length -1].isIdentifier();
        }
        else {
            lengthIsValid                   = expression.length === 2;
            lastTokenIsIdentifierOrString   = expression[expression.length -1].isQuote();
        }

        return lengthIsValid
            && usingTokenIsPresent
            && lastTokenIsIdentifierOrString;
    }

    static isNativeImport (expression) {
        return expression[1].isAtSymbol();
    }

    static isSingleVariableDeclaration (expression) {
        let lengthIsValid           = expression.length === 2;
        let tokensAreIdentifiers    = expression[0].isIdentifier() && expression[1].isIdentifier();

        return lengthIsValid
            && tokensAreIdentifiers;
    }

    static isAssignedVariableDeclaration (expression) {
        let lengthIsValid                = expression.length >= 4;
        let firstTwoTokensAreIdentifiers = expression[0].isIdentifier() && expression[1].isIdentifier();
        let thirdTokenIsEqualsSymbol     = expression[2].isEqualsSymbol();

        return lengthIsValid
            && firstTwoTokensAreIdentifiers
            && thirdTokenIsEqualsSymbol;
    }

    static isConstantDeclaration (expression) {
        let lengthIsValid                    = expression.length >= 5;
        let firstTokenIsExclamationSymbol    = expression[0].isExclamationSymbol();
        let secondAndThidTokenAreIdentifiers = expression[1].isIdentifier() && expression[2].isIdentifier();
        let fourthTokenIsEqualsSymbol        = expression[3].isEqualsSymbol();

        return lengthIsValid
            && firstTokenIsExclamationSymbol
            && secondAndThidTokenAreIdentifiers
            && fourthTokenIsEqualsSymbol;
    }
}


module.exports = Parser;
