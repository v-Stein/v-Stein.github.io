const TokenType = require('./TokenTypes');
const Token     = require('./Token');


module.exports = {
    expressions: {
        'native-import': [
            new Token(TokenType.KEYWORD     , 'using'   , null),
            new Token(TokenType.AT          , null      , null),
            new Token(TokenType.IDENTIFIER  , null      , null)
        ],
        'module-import': [
            new Token(TokenType.KEYWORD     , 'using'   , null),
            new Token(TokenType.QUOTE       , null      , null)
        ],
    }
};