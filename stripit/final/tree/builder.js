
const TokenTypes = require('../tokens/types');

class TreeBuilder {
    constructor () {
        this.tokens         = [];
        this.tokensLength   = 0;
        this.pos            = 0;

        this.tree = {
            builtinImports  : [],
            moduleImports   : [],
            classes         : {},
        };

        this._static = TreeBuilder;
    }

    /** Static token comparators */

    static _isComment (token) {
        return (token.name === TokenTypes.LINE_COMMENT)
            || (token.name === TokenTypes.BLOCK_COMMENT);
    }

    static _isIdentifier (token, value = null) {
        return (token.name === TokenTypes.IDENTIFIER)
            && (value ? token.value === value : true);
    }

    static _isImport (token) {
        return this._isIdentifier(token, 'using');
    }

    static _isClass (token) {
        return this._isIdentifier(token, 'class');
    }

    static _isAtSymbol (token) {
        return (token.name === TokenTypes.AT);
    }

    static _isQuoteSymbol (token) {
        return (token.name === TokenTypes.QUOTE);
    }

    static _isCharQuoteSymbol (token) {
        return (token.name === TokenTypes.CHAR_QUOTE);
    }

    static _isSemiSymbol (token) {
        return (token.name === TokenTypes.SEMI);
    }

    static _isPlusSymbol (token) {
        return (token.name === TokenTypes.PLUS);
    }

    static _isMinusSymbol (token) {
        return (token.name === TokenTypes.MINUS);
    }

    static _isEqualsSymbol (token) {
        return (token.name === TokenTypes.EQUALS);
    }

    static _isColonSymbol (token) {
        return (token.name === TokenTypes.COLON);
    }

    static _isMultiplySymbol (token) {
        return (token.name === TokenTypes.MULTIPLY);
    }

    static _isDivideSymbol (token) {
        return (token.name === TokenTypes.DIVIDE);
    }

    static _isExclamationSymbol (token) {
        return (token.name === TokenTypes.EXCLAMATION);
    }

    static _isCommaSymbol (token) {
        return (token.name === TokenTypes.COMMA);
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

    static _isL_BracketSymbol (token) {
        return (token.name === TokenTypes.L_BRACKET);
    }

    static _isR_BracketSymbol (token) {
        return (token.name === TokenTypes.R_BRACKET);
    }

    static _isProtectionSymbol (token) {
        return (this._isPlusSymbol(token))
            || (this._isMinusSymbol(token))
            || (this._isColonSymbol(token));
    }

    /** END Static token comparators */


    /** Helper functions */

    static _stripQuotes (quotedValue) {
        return quotedValue.substring(1, quotedValue.length - 1);
    }

    _findClosingBraceFrom (position) {
        let L_BraceCount    = 1,
            R_BraceCount    = 0,
            pos             = position + 1;

        // While we have more opening braces than closing braces
        // we count opening and closing braces to determine
        // when the first opening brace is closed
        while (L_BraceCount - R_BraceCount !== 0) {
            // If the position is superior than the full tokens length, then it is likely
            // the first opening brace is not closed. So inform the user it is malformed
            if (pos > this.tokensLength) throw Error('Unclosed body error');

            let token = this.getTokenAt(pos);

            if (this._static._isL_BraceSymbol(token)) L_BraceCount++;
            if (this._static._isR_BraceSymbol(token)) R_BraceCount++;

            pos++;
        }

        // We return pos - 1 because even if the token is found, pos++ will be called.
        return pos - 1;
    }

    _findClosingParenFrom (position) {
        let L_ParenCount    = 1,
            R_ParenCount    = 0,
            pos             = position + 1;

        // While we have more opening parenthesis than closing parenthesis
        // we count opening and closing parenthesis to determine when the
        // first opening parenthesis is closed
        while (L_ParenCount - R_ParenCount !== 0) {
            // If the position is superior than the full tokens length, then it is likely
            // the first opening parenthesis is not closed. So inform the user it is malformed
            if (pos > this.tokensLength) throw Error('Unclosed parenthesis error');

            let token = this.getTokenAt(pos);

            if (this._static._isL_ParenSymbol(token)) L_ParenCount++;
            if (this._static._isR_ParenSymbol(token)) R_ParenCount++;

            pos++;
        }

        // We return pos - 1 because even if the token is found, pos++ will be called.
        return pos - 1;
    }

    _findDelimitingSemicolon (position) {
        let pos = position + 1;

        while (true) {
            // If the position is superior than the full tokens length, then it is likely
            // the expressions is not terminated. So inform the user it is malformed
            if (pos > this.tokensLength) throw Error('Unterminated statement');

            let token = this.getTokenAt(pos);

            if (this._static._isSemiSymbol(token)) break;

            pos++;
        }

        return pos;
    }

    static _addVariableToClassContent (content, variable) {
        if (variable in content.properties) throw Error('Duplicate class property "' + variable.name + '"');

        content.properties[variable.name] = {
            type: variable.varType,
            constant: false,
            value: null
        };

        return content;
    }

    static _addConstantToClassContent (content, constant) {
        if (constant in content.properties) throw Error('Duplicate class property "' + constant.name + '"');

        content.properties[constant.name] = {
            type: constant.varType,
            constant: true,
            value: constant.value
        };

        return content;
    }

    static _addMethodToClassContent (content, method) {
        content.methods[method.name] = {
            returnType: method.returnType,
            parameters: method.parameters,
            expressions: method.expressions
        };

        return content;
    }

    /** END Helper functions */


    /** Tree building methods */

    _addBuiltinImport (builtin) {
        this.tree.builtinImports.push(builtin);
    }

    _addModuleImport (userDefinedModule) {
        this.tree.moduleImports.push(
            this._static._stripQuotes(userDefinedModule)
        );
    }

    _addClass (name, inheritance, publicContent, privateContent, protectedContent) {
        if (name in this.tree.classes) throw Error('Duplicate class declaration "' + name + '"');

        this.tree.classes[name] = {
            inherits: inheritance,
            public: publicContent,
            private: privateContent,
            protected: protectedContent
        }
    }

    /** END Tree building methods */


    /** Position handlers */

    _skip (position = null) {
        return (position !== null)
            ? this.pos + position
            : this.pos + 1;
    }

    _jumpTo (position) {
        return this.pos = position;
    }

    /** END Position handlers */


    /** Individual parsers */

    _parseLine () {
        const firstToken = this.getToken();

        if (this._static._isComment(firstToken))    return this._skip();
        if (this._static._isImport(firstToken))     return this._parseImport();
        if (this._static._isClass(firstToken))      return this._parseClass();

        // If the first token of a line is not an import, a comment or a class declaration,
        // we throw an unexpected token error, because everything is class in stripit
        throw Error('Unexpected token ' + firstToken.value);
    }

    _parseImport () {
        // An import expression is either containing three tokens or four tokens
        // Taking in account that first token is parsed by the line parser,
        // we know it's the "using" identifier (so we use 2nd, 3rd and 4th tokens)
        const
            secondToken = this.getToken(1),
            thirdToken  = this.getToken(2),
            fourthToken = this.getToken(3);

        if (this._static._isAtSymbol(secondToken)) {
            // The import expression is importing a builtin module
            // because it starts with '@' symbol
            // So we're expecting the next token to be an identifier
            // and the next again should be a semicolon.
            if (! this._static._isIdentifier(thirdToken))   throw Error('Unexpected token ' + thirdToken.value);
            if (! this._static._isSemiSymbol(fourthToken))  throw Error('Unterminated statement at ' + thirdToken.value);

            // Else, everything is ok in this import line.
            this._addBuiltinImport(thirdToken.value);
            return this._skip(4);
        }
        else {
            // The import should be a user-defined module as it doesn't have '@' symbol
            // so we should have a quote-type string right after the 'using' identifier
            // followed by the semicolon symbol.
            if (! this._static._isQuoteSymbol(secondToken)) throw Error('Unexpected token ' + secondToken.value);
            if (! this._static._isSemiSymbol(thirdToken))   throw Error('Unterminated statement at ' + secondToken.value);

            // Else, everything is ok in this import line.
            this._addModuleImport(secondToken.value);
            return this._skip(3);
        }
    }

    _parseClass () {
        // A class expression is defined by these:
        //   - A class declaration (which gives the name and inheritance of the class)
        //   - A body, containing methods and properties of the class, delimited by '{' and '}'
        let {name, inheritance, position} = this._parseClassDeclaration();

        const openingBodyToken = this.getTokenAt(position);

        if (! this._static._isL_BraceSymbol(openingBodyToken)) throw Error('Unexpected token ' + openingBodyToken.value);

        // The _findClosingBraceFrom() method checks if it is the right symbol, so no need to recheck it

        const closingPosition = this._findClosingBraceFrom(position);

        // Parse the class body to get each protection content
        let {publicContent, privateContent, protectedContent} = this._parseClassBody(position, closingPosition);

        // Register the class with all its attributes and methods
        this._addClass(name, inheritance, publicContent, privateContent, protectedContent);

        return closingPosition + 1;
    }

    _parseClassDeclaration () {
        // A class declaration contains two or four tokens
        // Taking in account that first token is parse by the line parser,
        // we know it's the "class" identifier (so we use 2nd, 3rd and 4th tokens)
        const
            secondToken = this.getToken(1),
            thirdToken  = this.getToken(2),
            fourthToken = this.getToken(3);

        // The second token should be an identifier defining the class name
        if (! this._static._isIdentifier(secondToken)) throw Error('Unexpected token ' + secondToken.value);

        let className       = secondToken.value,
            inheritanceName = null,
            position        = this._skip(2);

        // The next token is either a '<' symbol for inheritance or '{' to mark the body opening
        // so if we see the '<' token, we'll want to parse the inheritance before returning the
        // full class declartion parsing result
        if (this._static._isL_AngSymbol(thirdToken)) {
            // There is inheritance, so we'll check if the next token is an identifier
            // otherwise, it is likely the class declaration is wrong
            if (! this._static._isIdentifier(fourthToken)) throw Error('Unexpected token ' + fourthToken.value);

            inheritanceName = fourthToken.value;

            // The position if then two tokens away (because we parse two more)
            position = this._skip(4);
        }

        return {
            name        : className,
            inheritance : inheritanceName,
            position    : position
        }
    }

    _parseClassBody (from, to) {
        let publicContent       = { properties: {}, methods: {} },
            privateContent      = { properties: {}, methods: {} },
            protectedContent    = { properties: {}, methods: {} };

        let currentContent;

        // "from" is the opening brace, so we don't want to parse it
        from++;
        // Same for "to", as it is the closing brace, no need to parse it

        while (from < to) {
            // Each class body line is either a comment, a public, private or protected property or method
            // so we will only accept '#', "#{", '+', '-' and ':' tokens as a first token
            const firstToken = this.getTokenAt(from);

            // If it is a comment, just ignore it
            if (this._static._isComment(firstToken)) {
                from++;
                continue;
            }
            // If it is not an allowed token for protection, throw it
            if (! this._static._isProtectionSymbol(firstToken)) throw Error('Unexpected token ' + firstToken.value);

            // Determine which of the contents it should populate
            if (this._static._isPlusSymbol(firstToken)) {
                currentContent = publicContent;
            }
            else if (this._static._isMinusSymbol(firstToken)) {
                currentContent = privateContent;
            }
            else if (this._static._isColonSymbol(firstToken)) {
                currentContent = protectedContent;
            }


            // Else, parse it
            let {line, nextPos} = this._parseClassBodyLine(from);

            if (line.type === 'variable') {
                this._static._addVariableToClassContent(currentContent, line);
            }
            else if (line.type === 'constant') {
                this._static._addConstantToClassContent(currentContent, line);
            }
            else if (line.type === 'method') {
                this._static._addMethodToClassContent(currentContent, line);
            }

            from = nextPos;
        }

        return {publicContent, privateContent, protectedContent};
    }

    _parseClassBodyLine (position) {
        // Each class line can be three types of expressions:
        //   - a variable property declaration formed as : (protection) (identifier:type) (identifier:name) (semicolon)
        //   - a constant property declaration formed as : (protection) (exclamation) (identifier:type) (identifier:name) (equals) (any value) (semicolon)
        //   - a method declaration formed as : (protection) (identifier:name) (colon) (identifier:returnType) and then parameters and body
        //
        // So if the fourth token is a semicolon, this is a variable property declaration,
        // if the second token is a exclamation, this is a constant property declaration,
        // and if the third token is a colon, this is a method declaration

        const
            secondToken = this.getTokenAt(position, 1),
            thirdToken  = this.getTokenAt(position, 2),
            fourthToken = this.getTokenAt(position, 3);

        if (this._static._isSemiSymbol(fourthToken))        return this._parseClassVariableDeclaration(position);
        if (this._static._isExclamationSymbol(secondToken)) return this._parseClassConstantDeclaration(position);
        if (this._static._isColonSymbol(thirdToken))        return this._parseClassMethod(position);
        if (this._static._isL_ParenSymbol(thirdToken))      return this._parseClassMethod(position);
        // If we end up here, then it is nothing from the above and that isn't normal
        throw Error('Unexpected statement');
    }

    _parseClassVariableDeclaration (position) {
        // A class variable declaration contains 4 tokens:
        //   - The protection token
        //   - The type identifier token
        //   - The name identifier token
        //   - A semicolon token
        // So we just check for that to be present, and take the values (except the protection)
        const
            secondToken = this.getTokenAt(position, 1),
            thirdToken  = this.getTokenAt(position, 2),
            fourthToken = this.getTokenAt(position, 3);

        if (! this._static._isIdentifier(secondToken))  throw Error('Unexpected token ' + secondToken.value);
        if (! this._static._isIdentifier(thirdToken))   throw Error('Unexpected token ' + thirdToken.value);
        if (! this._static._isSemiSymbol(fourthToken))  throw Error('Unterminated statement ' + thirdToken.value);

        return {
            line: {
                type    : 'variable',
                name    : thirdToken.value,
                varType : secondToken.value
            },
            nextPos: position + 4
        };
    }

    _parseClassConstantDeclaration (position) {
        // A class constant declaration contains 7 tokens:
        //   - The protection token
        //   - The exclamation token
        //   - The type identifier token
        //   - The name identifier token
        //   - The equals token
        //   - The value token
        //   - A semicolon token
        // So we just check for that to be present, and take the values (except the protection)
        const
            secondToken  = this.getTokenAt(position, 1),
            thirdToken   = this.getTokenAt(position, 2),
            fourthToken  = this.getTokenAt(position, 3),
            fifthToken   = this.getTokenAt(position, 4),
            sixthToken   = this.getTokenAt(position, 5),
            seventhToken = this.getTokenAt(position, 6);

        if (! this._static._isExclamationSymbol(secondToken))   throw Error('Unexpected token ' + secondToken.value);
        if (! this._static._isIdentifier(thirdToken))           throw Error('Unexpected token ' + thirdToken.value);
        if (! this._static._isIdentifier(fourthToken))          throw Error('Unexpected token ' + fourthToken.value);
        if (! this._static._isEqualsSymbol(fifthToken))         throw Error('Unexpected token ' + fifthToken.value);
        if (! this._static._isSemiSymbol(seventhToken))         throw Error('Unterminated statement ' + sixthToken.value);

        return {
            line: {
                type    : 'constant',
                name    : fourthToken.value,
                varType : thirdToken.value,
                value   : sixthToken.value
            },
            nextPos: position + 7
        };
    }

    _parseClassMethod (position) {
        // A class method is defined by three parts:
        //   - The method signature (protection, name and return type)
        //   - The method parameters (each having a type, name, comma separated)
        //   - The method body, containing all the expressions
        let {name, returnType, parametersPosition} = this._parseClassMethodDeclaration(position);

        let {parameters, bodyPosition} = this._parseClassMethodParameters(parametersPosition);

        let closingBracePosition = this._findClosingBraceFrom(bodyPosition);

        let {expressions, endPosition} = this._parseClassMethodExpressions(bodyPosition, closingBracePosition);

        return {
            line: {
                type: 'method',
                name: name,
                returnType: returnType,
                parameters: parameters,
                expressions: expressions
            },
            nextPos: endPosition + 1
        };
    }

    _parseClassMethodDeclaration (position) {
        // A class method declaration contains 4 tokens:
        //   - The protection (which is not treated)
        //   - The name identifier
        //   - A colon symbol
        //   - The return type identifier
        // Or it is a constructor and then it contains 2 tokens:
        //   - The protection (should always be public)
        //   - The name identifier

        const
            secondToken = this.getTokenAt(position, 1),
            thirdToken = this.getTokenAt(position, 2),
            fourthToken = this.getTokenAt(position, 3);

        if (! this._static._isIdentifier(secondToken)) throw Error('Unexpected token ' + secondToken.value);
        if (! this._static._isColonSymbol(thirdToken)) {
            // Constructor
            if (! this._static._isL_ParenSymbol(thirdToken)) throw Error('Unexpected token ' + thirdToken.value);

            return {
                name: secondToken.value,
                returnType: '',
                parametersPosition: position + 2
            };
        }
        else {
            // Regular method
            if (! this._static._isIdentifier(fourthToken)) throw Error('Unexpected token ' + fourthToken.value);

            return {
                name: secondToken.value,
                returnType: fourthToken.value,
                parametersPosition: position + 4
            };
        }
    }

    _parseClassMethodParameters (openingParenPosition) {
        const openingParen = this.getTokenAt(openingParenPosition);

        // If the opening parenthesis is not a L_PAREN symbol, then it is unexpected
        if (! this._static._isL_ParenSymbol(openingParen)) throw Error('Unexpected token ' + openingParen.value);

        let closingParenPosition    = this._findClosingParenFrom(openingParenPosition),
            parameters              = [],
            pos                     = openingParenPosition + 1;

        while (pos < closingParenPosition) {
            // We expect each parameter to be of the format (identifier:type) (identifier:name) (comma | r_paren)
            // So we'll check if the first two tokens are identifiers, and if the third token position
            // is different than the closing parenhesis position, we'll check if it is a comma
            const
                firstToken  = this.getTokenAt(pos),
                secondToken = this.getTokenAt(pos + 1),
                thirdToken  = this.getTokenAt(pos + 2);

            if (! this._static._isIdentifier(firstToken)) throw Error('Unexpected token ' + firstToken.value);
            if (! this._static._isIdentifier(secondToken)) throw Error('Unexpected token ' + secondToken.value);

            if ((pos + 2) !== closingParenPosition && !this._static._isCommaSymbol(thirdToken)) throw Error('Unexpected token ' + thirdToken.value);

            parameters.push({
                name: secondToken.value,
                type: firstToken.value
            });

            pos += 3;
        }

        return {
            parameters: parameters,
            bodyPosition: closingParenPosition + 1
        };
    }

    _parseClassMethodExpressions (openingBracePosition) {
        const openingBrace = this.getTokenAt(openingBracePosition);

        // If the opening brace is not a L_BRACE symbol, then it is unexpected
        if (! this._static._isL_BraceSymbol(openingBrace)) throw Error('Unexpected token ' + openingBrace.value);

        let closingBracePosition    = this._findClosingBraceFrom(openingBracePosition),
            expressions             = [],
            pos                     = openingBracePosition + 1;


        while (pos < closingBracePosition) {

            if (this._static._isComment(this.getTokenAt(pos))) {
                pos++;
                continue;
            }

            let {expression, endPosition} = this._parseExpression(pos);

            expressions.push(expression);

            pos = endPosition + 1;
        }

        return {
            expressions: expressions,
            endPosition: closingBracePosition
        };
    }

    _parseExpression (position) {
        // We basically have 3 types of expressions (at the moment)
        //   - Return expressions : ">> returnValue;"
        //   - Equation expressions : 'val = 42;', 'String foo = "bar";'
        //   - Call expressions : 'this.out("foobar");'
        //
        // All these are semicolon delimited, but it may not be the case
        // of future expressions, as conditional statements, or iterative
        // statements. So we'll look what we have first.
        //
        // It may be better to check if the first token of the
        // expression contains reserved keywords, else find the
        // delimiting semicolon.
        let endPosition = this._findDelimitingSemicolon(position);

        const firstToken = this.getTokenAt(position);

        // We list all the tokens to be able to find an EQUALS symbol
        let tokens = [];
        for (let pos = position; pos < endPosition; pos++) {
            tokens.push(this.getTokenAt(pos));
        }

        if (this._static._isR_AngSymbol(firstToken)) {
            // We are on a return expression, so we'll look for the second R_ANG
            const secondToken = this.getTokenAt(position, 1);

            if (! this._static._isR_AngSymbol(secondToken)) throw Error('Unexpected token ' + firstToken.value);

            // This is correctly formed, so parse the right-handed side of the return expression and accept it
            let returnExpression = this._parseRightHandedExpression(position + 2, endPosition - 1);

            return {
                expression: {
                    type: 'return',
                    statement: returnExpression
                },
                endPosition: endPosition
            }
        }
        if (tokens.find(tk => this._static._isEqualsSymbol(tk))) {
            // We are on an assignement expression, so we'll look if it's also a declaration or not
            let equalsIndex = tokens.findIndex(tk => this._static._isEqualsSymbol(tk));

            let leftHanded = this._parseLeftHandedExpression(position, position + equalsIndex - 1),
                rightHanded = this._parseRightHandedExpression(position + equalsIndex + 1, endPosition - 1);

            return {
                expression: {
                    type: 'assignement',
                    leftHanded: leftHanded,
                    rightHanded: rightHanded
                },
                endPosition: endPosition
            }
        }
        else {
            return {
                expression: {
                    type: 'call',
                    statement: this._parseRightHandedExpression(position, endPosition - 1)
                },
                endPosition: endPosition
            }
        }
    }

    _parseLeftHandedExpression (pos, to) {
        let expression = [];

        while (pos <= to) {
            let token = this.getTokenAt(pos);

            expression.push({
                type: token.name,
                value: token.value
            });

            pos++;
        }

        return expression;
    }

    _parseRightHandedExpression (pos, to) {
        let expression = [];

        while(pos <= to) {
            let token = this.getTokenAt(pos);

            expression.push({
                type: token.name,
                value: token.value
            });

            pos++;
        }
        return expression;
    }

    /** END Individual parsers */


    /** Member methods */

    getToken (position = null) {
        return (position === null)
            ? this.tokens[this.pos]
            : this.tokens[this.pos + position];
    }

    getTokenAt (position, increment = 0) {
        return this.tokens[position + increment];
    }

    input (tokens) {
        this.tokens         = tokens;
        this.tokensLength   = tokens.length;
        this.pos            = 0;
    }

    createTree () {
        while (this.pos < this.tokensLength) {
            this._jumpTo(this._parseLine());
        }
    }

    getTree () {
        return this.tree;
    }

    /** END Member methods */
}


module.exports = TreeBuilder;