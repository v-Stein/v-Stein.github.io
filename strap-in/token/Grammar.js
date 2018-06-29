

module.exports = {
    LINE_COMMENT_START  : '#'   ,
    BLOCK_COMMENT_START : '#{'  ,
    BLOCK_COMMENT_END   : '}#'  ,
    STRING_LITERAL_START: '"'   ,
    CHAR_LITERAL_START  : "'"   ,
    NON_TOKENS          : [
        ' ',
        '\t',
        '\r',
        '\n',
    ],
    TERMINALS           : [
        ';',
        '{'
    ]
};