const TokenType = require('./TokenTypes');


module.exports = class Token {

    /** @property {String} name */

    /** @property {*} value */

    /** @property {Number} position */

    constructor (name, value, position) {
        this.name = name;
        this.value = value;
        this.position = position;
    }

    isComment () {
        return (this.name === TokenType.LINE_COMMENT)
            || (this.name === TokenType.BLOCK_COMMENT);
    }


    isIdentifier (value = null) {
        return (this.name === TokenType.IDENTIFIER)
            && (value ? this.value === value : true);
    }

    isKeyword (value = null) {
        return (this.name === TokenType.KEYWORD)
            && (value ? this.value === value : true);
    }

    isUsingKeyword () {
        return this.isKeyword('using');
    }

    isClassKeyWord () {
        return this.isKeyword('class');
    }

    isAtSymbol () {
        return (this.name === TokenType.AT);
    }

    isQuote () {
        return (this.name === TokenType.QUOTE);
    }

    isCharQuote () {
        return (this.name === TokenType.CHAR_QUOTE);
    }

    isSemiSymbol () {
        return (this.name === TokenType.SEMI);
    }

    isPlusSymbol () {
        return (this.name === TokenType.PLUS);
    }

    isMinusSymbol () {
        return (this.name === TokenType.MINUS);
    }

    isEqualsSymbol () {
        return (this.name === TokenType.EQUALS);
    }

    isColonSymbol () {
        return (this.name === TokenType.COLON);
    }

    isMultiplySymbol () {
        return (this.name === TokenType.MULTIPLY);
    }

    isDivideSymbol () {
        return (this.name === TokenType.DIVIDE);
    }

    isExclamationSymbol () {
        return (this.name === TokenType.EXCLAMATION);
    }

    isCommaSymbol () {
        return (this.name === TokenType.COMMA);
    }

    isL_AngSymbol () {
        return (this.name === TokenType.L_ANG);
    }

    isR_AngSymbol () {
        return (this.name === TokenType.R_ANG);
    }

    isL_ParenSymbol () {
        return (this.name === TokenType.L_PAREN);
    }

    isR_ParenSymbol () {
        return (this.name === TokenType.R_PAREN);
    }

    isL_BraceSymbol () {
        return (this.name === TokenType.L_BRACE);
    }

    isR_BraceSymbol () {
        return (this.name === TokenType.R_BRACE);
    }

    isL_BracketSymbol () {
        return (this.name === TokenType.L_BRACKET);
    }

    isR_BracketSymbol () {
        return (this.name === TokenType.R_BRACKET);
    }

    isProtectionSymbol () {
        return (this.isPlusSymbol())
            || (this.isMinusSymbol())
            || (this.isColonSymbol());
    }

    isTerminal () {
        return (this.isSemiSymbol())
            || (this.isL_BraceSymbol());
    }

    compare (token) {
        return (this.compareName(token))
            && (this.compareValue(token));
    }

    compareName (token) {
        return (this.name === token.name);
    }

    compareValue (token) {
        return (this.value === token.value);
    }
}