const Error = require('../errors/_Errors');
const TokenTypes = require('../lexer/_TokenTypes');


class TreeBuilder {
    constructor () {
        this.tokens         = [];
        this.tokensLength   = 0;
        this.pos            = 0;

        this.tree = {
            builtinImports  : [],
            fileImports     : [],
            classes         : {},
        }
    }

    _addFileImport (name) {
        if (~this.tree.fileImports.indexOf(name)) throw Error.DUPLICATE_IMPORT(name);

        this.tree.fileImports.push(name);
    }

    _addBuiltinImport (name) {
        if (~this.tree.builtinImports.indexOf(name)) throw Error.DUPLICATE_IMPORT(name);

        this.tree.builtinImports.push(name);
    }

    _addClass (name, inheritsFrom = null) {
        if (name in this.tree.classes) throw Error.CLASS_EXISTS(name);

        this.tree.classes[name] = {
            inherits: inheritsFrom,
            public: {
                methods: {},
                properties: {},
            },
            private: {
                methods: {},
                properties: {},
            },
            protected: {
                methods: {},
                properties: {},
            }
        }
    }

    _addPublicMethod (className, method) {
        if (method in this.tree.classes[className].public.methods) throw Error.DUPLICATE_METHOD(className, method.name);

        this.tree.classes[className].public.methods[method.name] = method;
    }

    _addPrivateMethod (className, method) {
        if (method in this.tree.classes[className].private.methods) throw Error.DUPLICATE_METHOD(className, method.name);

        this.tree.classes[className].private.methods[method.name] = method;
    }

    _addProtectedMethod (className, method) {
        if (method in this.tree.classes[className].protected.methods) throw Error.DUPLICATE_METHOD(className, method.name);

        this.tree.classes[className].protected.methods[method.name] = method;
    }

    _addPublicProperty (className, property) {
        if (property.name in this.tree.classes[className].public.properties)       throw Error.DUPLICATE_PROPERTY(className, property.name);
        if (property.name in this.tree.classes[className].private.properties)      throw Error.DUPLICATE_PROPERTY(className, property.name);
        if (property.name in this.tree.classes[className].protected.properties)    throw Error.DUPLICATE_PROPERTY(className, property.name);

        this.tree.classes[className].public.properties[property.name] = property;
    }

    _addPrivateProperty (className, property) {
        if (property.name in this.tree.classes[className].public.properties)       throw Error.DUPLICATE_PROPERTY(className, property.name);
        if (property.name in this.tree.classes[className].private.properties)      throw Error.DUPLICATE_PROPERTY(className, property.name);
        if (property.name in this.tree.classes[className].protected.properties)    throw Error.DUPLICATE_PROPERTY(className, property.name);

        this.tree.classes[className].private.properties[property.name] = property;
    }

    _addProtectedProperty (className, property) {
        if (property.name in this.tree.classes[className].public.properties)       throw Error.DUPLICATE_PROPERTY(className, property.name);
        if (property.name in this.tree.classes[className].private.properties)      throw Error.DUPLICATE_PROPERTY(className, property.name);
        if (property.name in this.tree.classes[className].protected.properties)    throw Error.DUPLICATE_PROPERTY(className, property.name);

        this.tree.classes[className].protected.properties[property.name] = property;
    }

    static _newMethod (name, params, returnType, expressions = []) {
        return {
            name: name,
            params: params,
            returnType: returnType,
            expressions: expressions
        }
    }

    static _newProperty (name, type, initialValue = null, constant = false) {
        return {
            name: name,
            type: type,
            initialValue: initialValue,
            constant: constant
        }
    }

    static _newParam (name, type) {
        return {
            name: name,
            type: type
        }
    }

    static _isComment (token) {
        return (token.name === TokenTypes.LINE_COMMENT)
            || (token.name === TokenTypes.BLOCK_COMMENT);
    }

    static _isImport (token) {
        return (token.name === TokenTypes.IDENTIFIER)
            && (token.value === 'using');
    }

    static _isClass (token) {
        return (token.name === TokenTypes.IDENTIFIER)
            && (token.value === 'class');
    }

    static _isATSymbol (token) {
        return (token.name === TokenTypes.AT);
    }

    static _isIdentifier (token, value = null) {
        return (token.name === TokenTypes.IDENTIFIER)
            && (value ? token.value === value : true);
    }

    static _isQuoteSymbol (token) {
        return (token.name === TokenTypes.QUOTE);
    }

    static _isSemiSymbol (token) {
        return (token.name === TokenTypes.SEMI);
    }

    static _isPlusSymbol (token) {
        return (token.name === TokenTypes.PLUS);
    }

    static _isEqualsSymbol (token) {
        return (token.name === TokenTypes.EQUALS);
    }

    static _isExclamationSymbol (token) {
        return (token.name === TokenTypes.EXCLAMATION);
    }

    static _isMinusSymbol (token) {
        return (token.name === TokenTypes.MINUS);
    }

    static _isColonSymbol (token) {
        return (token.name === TokenTypes.COLON);
    }

    static _isL_AngSymbol (token) {
        return (token.name === TokenTypes.L_ANG);
    }

    static _isR_AngSymbol (token) {
        return (token.name === TokenTypes.R_ANG);
    }

    static _isL_ParenSymbol (token) {
        return (token.name === TokenTypes.L_PAREN);
    }

    static _isR_ParenSymbol (token) {
        return (token.name === TokenTypes.R_PAREN);
    }

    static _isL_BraceSymbol (token) {
        return (token.name === TokenTypes.L_BRACE);
    }

    static _isR_BraceSymbol (token) {
        return (token.name === TokenTypes.R_BRACE);
    }

    _skip (position = null) {
        console.log('Skipping token...');
        return (position)
            ? position + 1
            : this.pos + 1;
    }

    _parseImportLine () {
        console.log('Parsing import line...');
        const
            secondToken   = this.tokens[this.pos + 1],
            thirdToken    = this.tokens[this.pos + 2],
            fourthToken   = this.tokens[this.pos + 3];

        if (TreeBuilder._isATSymbol(secondToken)) {
            if (TreeBuilder._isIdentifier(thirdToken)) {
                if (!TreeBuilder._isSemiSymbol(fourthToken)) throw Error.UNEXPECTED_EOL(thirdToken.value);

                this._addBuiltinImport(thirdToken.value);
                return this.pos + 4;
            }
            else {
                throw Error.UNEXPECTED_TOKEN(thirdToken.value);
            }
        }
        else if (TreeBuilder._isQuoteSymbol(secondToken)) {
            if (!TreeBuilder._isSemiSymbol(thirdToken)) throw Error.UNEXPECTED_EOL(secondToken.value);

            this._addFileImport(secondToken.value);
            return this.pos + 3;
        }
        else {
            throw Error.UNEXPECTED_TOKEN(secondToken.value);
        }
    }

    _parseClass () {
        console.log('Parsing class...')
        const
            secondToken = this.tokens[this.pos + 1],
            thirdToken  = this.tokens[this.pos + 2],
            fourthToken = this.tokens[this.pos + 3],
            fifthToken  = this.tokens[this.pos + 4];

        if (!TreeBuilder._isIdentifier(secondToken)) throw Error.UNEXPECTED_TOKEN(secondToken.value);

        if (TreeBuilder._isL_AngSymbol(thirdToken)) {
            if (!TreeBuilder._isIdentifier(fourthToken))    throw Error.UNEXPECTED_TOKEN(fourthToken.value);
            if (!TreeBuilder._isL_BraceSymbol(fifthToken))  throw Error.UNEXPECTED_TOKEN(fifthToken.value);

            this._addClass(secondToken.value, fourthToken.value);

            return this._parseClassBodyFrom(secondToken.value, this.pos + 4);
        }
        else {
            if (!TreeBuilder._isL_BraceSymbol(thirdToken)) throw Error.UNEXPECTED_TOKEN(thirdToken.value);

            this._addClass(secondToken.value);

            return this._parseClassBodyFrom(secondToken.value, this.pos + 2);
        }
    }

    _parseClassStatement (className, position) {
        console.log('Parsing statement from "' + className + '" (position ' + position + ')');
        const firstToken = this.tokens[position];

        if (TreeBuilder._isComment(firstToken))     return this._skip(position);
        if (TreeBuilder._isPlusSymbol(firstToken))  return this._parsePublicStatement(className, position);
        if (TreeBuilder._isMinusSymbol(firstToken)) return this._parsePrivateStatement(className, position);
        if (TreeBuilder._isColonSymbol(firstToken)) return this._parseProtectedStatement(className, position);

        throw Error.UNEXPECTED_TOKEN(firstToken.value);
    }

    _parsePublicStatement (className, position) {
        console.log('Parsing public statement from "' + className + '"');

        const
            secondToken  = this.tokens[position + 1],
            thirdToken   = this.tokens[position + 2],
            fourthToken  = this.tokens[position + 3],
            fifthToken   = this.tokens[position + 4],
            sixthToken   = this.tokens[position + 5],
            seventhToken = this.tokens[position + 6];

        if (TreeBuilder._isColonSymbol(thirdToken)) {
            // Method
            if (!TreeBuilder._isIdentifier(secondToken)) throw Error.UNEXPECTED_TOKEN(secondToken.value);
            if (!TreeBuilder._isIdentifier(fourthToken)) throw Error.UNEXPECTED_TOKEN(fourthToken.value);
            if (!TreeBuilder._isL_ParenSymbol(fifthToken)) throw Error.UNEXPECTED_TOKEN(fifthToken.value);

            let {params, position:pos} = this._parseParamsFrom(position + 4);

            this._addPublicMethod(
                className,
                TreeBuilder._newMethod(
                    secondToken.value,
                    params,
                    fourthToken.value,
                    []
                )
            );
            return pos;
        }
        else {
            // Property or unexpected
            if (TreeBuilder._isExclamationSymbol(secondToken)) {
                // Constant
                if (!TreeBuilder._isIdentifier(thirdToken)) throw Error.UNEXPECTED_TOKEN(thirdToken.value);
                if (!TreeBuilder._isIdentifier(fourthToken)) throw Error.UNEXPECTED_TOKEN(fourthToken.value);
                if (!TreeBuilder._isEqualsSymbol(fifthToken)) throw Error.UNEXPECTED_TOKEN(fifthToken.value);
                if (!TreeBuilder._isSemiSymbol(seventhToken)) throw Error.UNEXPECTED_EOL(sixthToken.value);

                this._addPublicProperty(
                    className,
                    TreeBuilder._newProperty(
                        fourthToken.value,
                        thirdToken.value,
                        sixthToken.value,
                        true
                    )
                );
                return position + 7;
            }
            else {
                // Not constant
                if (!TreeBuilder._isIdentifier(secondToken)) throw Error.UNEXPECTED_TOKEN(secondToken.value);
                if (!TreeBuilder._isIdentifier(thirdToken)) throw Error.UNEXPECTED_TOKEN(thirdToken.value);
                if (TreeBuilder._isEqualsSymbol(fourthToken)) {
                    if (!TreeBuilder._isSemiSymbol(sixthToken)) throw Error.UNEXPECTED_EOL(fifthToken.value);

                    this._addPublicProperty(
                        className,
                        TreeBuilder._newProperty(
                            thirdToken.value,
                            secondToken.value,
                            fifthToken.value
                        )
                    );
                    return position + 6;
                }
                else {
                    if (!TreeBuilder._isSemiSymbol(fourthToken)) throw Error.UNEXPECTED_EOL(thirdToken.value);

                    this._addPublicProperty(
                        className,
                        TreeBuilder._newProperty(
                            thirdToken.value,
                            secondToken.value
                        )
                    );
                    return position + 4;
                }
            }
        }
    }

    _parsePrivateStatement (className, position) {

    }

    _parseProtectedStatement (className, position) {

    }

    _parseClassBodyFrom (className, startPosition) {
        console.log('Parsing body from class "' + className  + '"...');

        let position    = startPosition + 1,
            endPosition = this._findLastTokenIndexOfClass(startPosition);

        while (position < endPosition) {
            position = this._parseClassStatement(className, position);
        }
    }

    _findLastTokenIndexOfClass (startPosition) {
        console.log('Finding last Token index from class');
        let L_BraceCount = 1,
            R_BraceCount = 0,
            position = startPosition + 1;

        while (L_BraceCount - R_BraceCount !== 0) {
            let token = this.tokens[position];

            console.log(L_BraceCount, R_BraceCount, token);

            if (TreeBuilder._isL_BraceSymbol(token)) L_BraceCount++;
            if (TreeBuilder._isR_BraceSymbol(token)) R_BraceCount++;

            position++;
        }
        console.log('Found index : ' + position -1);
        return position - 1;
    }

    _parseParamsFrom (startPosition) {
        let position = startPosition + 1,
            done = false;

        let params = [];

        while (!done && position <= this.tokensLength) {
            let typeToken = this.tokens[position],
                nameToken = this.tokens[position + 1];

            if (!TreeBuilder._isIdentifier(typeToken)) throw Error.UNEXPECTED_TOKEN(typeToken);
            if (!TreeBuilder._isIdentifier(nameToken)) throw Error.UNEXPECTED_TOKEN(nameToken);

            let thirdToken = this.tokens[position + 2];

            if (TreeBuilder._isR_ParenSymbol(thirdToken)) done = true;

            params.push(TreeBuilder._newParam(nameToken.value, typeToken.value));

            position += 3;
        }

        if (!done) throw Error.UNTERMINATED_STATEMENT(this.tokens[startPosition], startPosition);

        return { params: params, position: position };
    }

    _parseExpression () {

    }

    _parseLine () {
        const firstToken = this.tokens[this.pos];

        if (TreeBuilder._isComment(firstToken)) return this._skip();
        if (TreeBuilder._isImport(firstToken))  return this._parseImportLine();
        if (TreeBuilder._isClass(firstToken))   return this._parseClass();
    }

    input (tokens) {
        this.tokens = tokens;
        this.tokensLength = tokens.length;
        this.pos = 0;
    }

    createTree () {
        while (this.pos <= this.tokensLength) {
            this.pos = this._parseLine();
        }
    }

    getTree () {
        return this.tree;
    }

}


module.exports = TreeBuilder;