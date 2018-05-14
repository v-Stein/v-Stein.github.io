const Errors = {
    bufferNotReadable: Error('Given lecture was not readable.')
};

const TokenTypes = require('./_TokenTypes');


class Lexer {
    constructor () {
        this.pos            = 0;
        this.buffer         = null;
        this.bufferLength   = 0;
        this.operatorTable = {
            '+' : TokenTypes.PLUS        ,
            '-' : TokenTypes.MINUS       ,
            '*' : TokenTypes.MULTIPLY    ,
            '.' : TokenTypes.PERIOD      ,
            '\\': TokenTypes.BACKSLASH   ,
            ':' : TokenTypes.COLON       ,
            '%' : TokenTypes.PERCENT     ,
            '|' : TokenTypes.PIPE        ,
            '!' : TokenTypes.EXCLAMATION ,
            '?' : TokenTypes.QUESTION    ,
            '#' : TokenTypes.POUND       ,
            '&' : TokenTypes.AMPERSAND   ,
            ';' : TokenTypes.SEMI        ,
            ',' : TokenTypes.COMMA       ,
            '(' : TokenTypes.L_PAREN     ,
            ')' : TokenTypes.R_PAREN     ,
            '<' : TokenTypes.L_ANG       ,
            '>' : TokenTypes.R_ANG       ,
            '{' : TokenTypes.L_BRACE     ,
            '}' : TokenTypes.R_BRACE     ,
            '[' : TokenTypes.L_BRACKET   ,
            ']' : TokenTypes.R_BRACKET   ,
            '=' : TokenTypes.EQUALS      ,
            '@' : TokenTypes.AT          ,
        };
    }

    /**
     * Reinitialize the current lecture of the buffer. The Lexer will
     * then start its lecture from the beginning.
     * (Not advised to run without a self._setBuffer then)
     * @returns {Lexer}
     * @private
     */
    _resetLecture () {
        this.pos = 0;

        return this;
    }

    /**
     * Initializes or set the Lexer's buffer to the given one.
     * @param buffer
     * @returns {Lexer}
     * @private
     */
    _setBuffer (buffer) {
        this.buffer         = buffer;
        this.bufferLength   = buffer.length;

        return this;
    }

    /**
     * Skips any non-token character from the current buffer.
     * @private
     */
    _skipNonTokens () {
        while (this.pos < this.bufferLength) {
            let char = this.buffer.charAt(this.pos);

            if (char === ' ' || char === '\t' || char === '\r' || char === '\n') {
                this.pos++;
            }
            else {
                break;
            }
        }
    }

    /**
     * Identifies a LINE_COMMENT token
     * @returns {{name: string, value: string, pos: number|*}}
     * @private
     */
    _processComment () {
        let endPos = this.pos + 2;
        // Skip until the end of the line
        let char = this.buffer.charAt(this.pos + 2);

        while (endPos < this.bufferLength && !Lexer._isNewLine(this.buffer.charAt(endPos))) {
            endPos++;
        }

        let token = {
            name    : TokenTypes.LINE_COMMENT                   ,
            value   : this.buffer.substring(this.pos, endPos)   ,
            pos     : this.pos                                  ,
        };

        this.pos = endPos + 1;
        return token;
    }

    /**
     * Identifies a BLOCK_COMMENT token
     * @returns {{name: string, value: string, pos: number|*}}
     * @private
     */
    _processBlockComment () {
        let endIndex = this.buffer.indexOf('#}', this.pos + 2);

        if (endIndex === -1) {
            throw Error('Unterminated block comment at ' + this.pos);
        }
        else {
            let token = {
                name    : TokenTypes.BLOCK_COMMENT                      ,
                value   : this.buffer.substring(this.pos, endIndex + 2) ,
                pos     : this.pos                                      ,
            };

            this.pos = endIndex + 2;
            return token;
        }
    }

    _processIdentifier () {
        let endPos = this.pos + 1;

        while (endPos < this.bufferLength && Lexer._isAlphaNum(this.buffer.charAt(endPos))) {
            endPos++;
        }

        let token = {
            name    : TokenTypes.IDENTIFIER                     ,
            value   : this.buffer.substring(this.pos, endPos)   ,
            pos     : this.pos                                  ,
        };

        this.pos = endPos;
        return token;
    }

    _processNumber () {
        let endPos = this.pos + 1;

        while (endPos < this.bufferLength && Lexer._isDigit(this.buffer.charAt(endPos))) {
            endPos++;
        }

        let token = {
            name    : TokenTypes.NUMBER                         ,
            value   : this.buffer.substring(this.pos, endPos)   ,
            pos     : this.pos                                  ,
        };

        this.pos = endPos;
        return token;
    }

    _processQuote () {
        let endIndex = this.buffer.indexOf('"', this.pos + 1);

        if (endIndex === -1) {
            throw Error('Unterminated string litteral at ' + this.pos);
        }
        else {
            let token = {
                name    : TokenTypes.QUOTE                              ,
                value   : this.buffer.substring(this.pos, endIndex + 1) ,
                pos     : this.pos                                      ,
            };

            this.pos = endIndex + 1;
            return token;
        }
    }

    _processCharQuote () {
        let endIndex = this.buffer.indexOf("'", this.pos + 1);

        if (endIndex === -1) {
            throw Error('Unterminated character litteral at ' + this.pos);
        }
        else if (endIndex - this.pos > 3) {
            throw Error('Illegal string in a character litteral at ' + this.pos);
        }
        else {
            let token = {
                name    : TokenTypes.CHAR_QUOTE                         ,
                value   : this.buffer.substring(this.pos, endIndex + 1) ,
                pos     : this.pos                                      ,
            }
        }
    }

    /**
     * Initializes or reinitializes the Lexer's buffer. This
     * resets the Lexer's internal state and tokens will be red
     * from the beginning of the new buffer
     * @param buffer
     */
    input (buffer) {
        this
            ._resetLecture()
            ._setBuffer(buffer);
    }

    /**
     * Get the next token from the current buffer. Each token
     * is an object with the following properties:
     *   - name: name of the pattern that this token matched (from grammar).
     *   - value: actual string value of the token.
     *   - pos: offset in the current buffer where the token sart.
     *
     * If there are no more tokens in the buffer, returns null. In
     * case of an error, throws Error.
     */
    nextToken () {
        this._skipNonTokens();

        if (this.pos >= this.bufferLength) {
            return null;
        }

        // Here we are on a real token. Let's figure out which.
        let char = this.buffer.charAt(this.pos);

        // '#' is treated specially, because it starts a comment,
        // but can also start a block comment if followed by {
        // Let's figure out if it is a line or block comment
        if (char === '#') {
            let nextChar = this.buffer.charAt(this.pos + 1);
            if (nextChar === '{') {
                return this._processBlockComment();
            }
            else {
                return this._processComment();
            }
        }
        else {
            // Look it up in the table of operators
            let operator = this.operatorTable[char];
            if (operator !== undefined) {
                return {
                    name    : operator  ,
                    value   : char      ,
                    pos     : this.pos++,
                }
            }
            else {
                // It is not an operator - so it's the beginning of another token.
                if (Lexer._isAlpha(char)) {
                    return this._processIdentifier();
                }
                else if (Lexer._isDigit(char)) {
                    return this._processNumber();
                }
                else if (char === '"') {
                    return this._processQuote();
                }
                else if (char === "'") {
                    return this._processCharQuote();
                }
                else {
                    throw Error('Unexpected token at ' + this.pos);
                }
            }
        }
    }

    lexAll () {
        let tokens = [],
            token;
        while (token = this.nextToken()) {
            tokens.push(token);
        }

        return tokens;
    }


    static _isAlpha (char) {
        return (char >= 'a' && char <= 'z')
            || (char >= 'A' && char <= 'Z')
            || (char === '_')
    }

    static _isDigit (char) {
        return (char >= '0' && char <= '9');
    }

    static _isAlphaNum (char) {
        return (Lexer._isAlpha(char))
            || (Lexer._isDigit(char))
    }

    static _isNewLine (char) {
        return (char === '\r')
            || (char === '\n');
    }
}


module.exports = Lexer;