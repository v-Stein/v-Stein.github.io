const OperatorTable = require('../token/Operators');
const Grammar = require('../token/Grammar');
const Token = require('../token/Token');
const TokenType = require('../token/TokenTypes');
const Keywords = require('../token/Keywords');


module.exports = class Lexer {

    /** @property {number} pos */

    /** @property {string|null} buffer */

    /** @property {number} bufferLength */

    /** @property {string|null} file */

    constructor () {
        this.pos            = 0;
        this.buffer         = null;
        this.bufferLength   = 0;
    }

    /**
     * Resets the current lecture of the buffer. The Lexer will
     * then start its lecture from the beginning.
     * (Not advised to run without a self._setBuffer then)
     * @returns {module.Lexer}
     * @private
     */
    _resetLecture () {
        this.pos = 0;

        return this;
    }

    /**
     * Sets or resets the Lexer's buffer to the given one.
     * @param {string} buffer
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
     * @returns {module.Lexer}
     * @private
     */
    _skipNonTokens () {
        while (this.pos < this.bufferLength) {
            let char = this.buffer.charAt(this.pos);

            if (~Grammar.NON_TOKENS.indexOf(char)) {
                this.pos++;
            }
            else {
                break;
            }
        }

        return this;
    }

    /**
     * Identifies a LINE_COMMENT token.
     * @returns {Token}
     * @private
     */
    _processLineComment () {
        let endPosition = this.pos + 2;

        // Skip until the end of the line
        while (endPosition < this.bufferLength && !Lexer._isNewLine(this.buffer.charAt(endPosition))) {
            endPosition++;
        }

        let token = new Token(
            TokenType.LINE_COMMENT,
            this.buffer.substring(this.pos, endPosition),
            this.pos
        );

        this.pos = endPosition + 1;

        return token;
    }

    /**
     * Identifies a BLOCK_COMMENT token
     * @returns {Token}
     * @private
     */
    _processBlockComment () {
        let endPosition = this.buffer.indexOf(Grammar.BLOCK_COMMENT_END, this.pos + 2);

        if (endPosition === -1) {
            return new Token(TokenType.ERROR, 'Unterminated block comment', this.pos);
        }
        else {
            let token = new Token(
                TokenType.BLOCK_COMMENT,
                this.buffer.substring(this.pos, endPosition + 2),
                this.pos
            );

            this.pos = endPosition + 2;

            return token;
        }
    }

    /**
     * Identifies an IDENTIFIER token
     * @returns {Token}
     * @private
     */
    _processIdentifier () {
        let endPosition = this.pos + 1;

        while (endPosition < this.bufferLength && Lexer._isAlphaNum(this.buffer.charAt(endPosition))) {
            endPosition++;
        }

        let value = this.buffer.substring(this.pos, endPosition);
        let token;

        if (~Keywords.indexOf(value)) {
            token = new Token(
                TokenType.KEYWORD,
                value,
                this.pos
            );
        }
        else {
            token = new Token(
                TokenType.IDENTIFIER,
                value,
                this.pos
            );
        }

        this.pos = endPosition;

        return token;
    }

    /**
     * Identifies a NUMBER token
     * @returns {Token}
     * @private
     */
    _processNumber () {
        let endPosition = this.pos + 1;

        while (endPosition < this.bufferLength && Lexer._isDigit(this.buffer.charAt(endPosition))) {
            endPosition++;
        }

        let token = new Token(
            TokenType.NUMBER,
            this.buffer.substring(this.pos, endPosition),
            this.pos
        );

        this.pos = endPosition;

        return token;
    }

    /**
     * Identifies a QUOTE token
     * @returns {Token}
     * @private
     */
    _processQuote () {
        let endPosition = this.buffer.indexOf('"', this.pos + 1);

        if (endPosition === -1) {
            return new Token(TokenType.ERROR, 'Unterminated string literal', this.pos);
        }
        else {
            let token = new Token(
                TokenType.QUOTE,
                this.buffer.substring(this.pos, endPosition + 1),
                this.pos
            );

            this.pos = endPosition + 1;

            return token;
        }
    }

    /**
     * Identifies a CHAR_QUOTE token
     * @returns {Token}
     * @private
     */
    _processCharQuote () {
        let endPosition = this.buffer.indexOf("'", this.pos + 1);

        if (endPosition === -1) {
            return new Token(TokenType.ERROR, 'Unterminated character literal', this.pos);
        }
        else if (endPosition - this.pos > 3) {
            return new Token(TokenType.ERROR, 'Illegal string in a character literal', this.pos);
        }
        else {
            let token = new Token(
                TokenType.CHAR_QUOTE,
                this.buffer.substring(this.pos, endPosition + 1),
                this.pos
            );

            this.pos = endPosition + 1;

            return token;
        }
    }

    /**
     * Sets or resets the Lexer's buffer. This
     * resets the Lexer's internal state and tokens will be red
     * from the beginning of the new buffer
     * @param {string} buffer
     * @returns {Lexer}
     */
    input (buffer) {
        return this
            ._resetLecture()
            ._setBuffer(buffer);
    }

    /**
     * Get the next token from the current buffer. Each token
     * is an object with the following properties:
     *   - name: name of the pattern that this token matched (from grammar).
     *   - value: actual string value of the token.
     *   - pos: offset in the current buffer where the token starts
     *
     * If there are no more tokens in the buffer, returns null. In
     * case of an error, returns an Error token.
     * @returns {*}
     */
    nextToken () {
        this._skipNonTokens();

        if (this.pos >= this.bufferLength) {
            return null;
        }

        // Here we are on a real token. Let's figure out which.
        let char = this.buffer.charAt(this.pos);

        // '#' is treated specially, because it starts a comment,
        // but can also start a block comment if followed by '{'
        // Let's figure out if it is a line or block comment
        if (char === Grammar.LINE_COMMENT_START) {
            let nextChar = this.buffer.charAt(this.pos + 1);

            if (nextChar === Grammar.BLOCK_COMMENT_START.charAt(1)) {
                return this._processBlockComment();
            }
            else {
                return this._processLineComment();
            }
        }
        else {
            // Look it up in the operator table
            let tokenName = OperatorTable[char];

            if (tokenName !== undefined) {
                return new Token(
                    tokenName,
                    char,
                    this.pos++
                );
            }
            else {
                // It is not an operator - so it's the beginning of another token.
                if (Lexer._isAlpha(char)) {
                    return this._processIdentifier();
                }
                else if (Lexer._isDigit(char)) {
                    return this._processNumber();
                }
                else if (char === Grammar.STRING_LITERAL_START) {
                    return this._processQuote();
                }
                else if (char === Grammar.CHAR_LITERAL_START) {
                    return this._processCharQuote();
                }
                else {
                    return new Token(TokenType.ERROR, 'Unexpected token ' + char, this.pos)
                }
            }
        }
    }

    /**
     * Reads all of the buffer and returns the tokens from it.
     * @returns {Array}
     */
    readBuffer () {
        this._resetLecture();

        let tokens = [],
            token;

        while (token = this.nextToken()) {
            tokens.push(token);
        }

        return tokens;
    }

    /**
     * Checks whether a char is alpha
     * @param {string} char
     * @returns {boolean}
     * @private
     */
    static _isAlpha (char) {
        return (char >= 'a' && char <= 'z')
            || (char >= 'A' && char <= 'Z')
            || (char === '_');
    }

    /**
     * Checks whether a char is a digit
     * @param {string} char
     * @returns {boolean}
     * @private
     */
    static _isDigit (char) {
        return (char >= '0' && char <= '9');
    }

    /**
     * Checks whether a char is alpha or digit
     * @param {string} char
     * @returns {boolean}
     * @private
     */
    static _isAlphaNum (char) {
        return (Lexer._isAlpha(char))
            || (Lexer._isDigit(char));
    }

    /**
     * Checks whether a char is a new line
     * @param {string} char
     * @returns {boolean}
     * @private
     */
    static _isNewLine (char) {
        return (char === '\r')
            || (char === '\n');
    }
};
