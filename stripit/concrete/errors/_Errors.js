module.exports = {
    CLASS_EXISTS: function (name) {
        return {
            code: 0,
            params: {
                name: name
            }
        }
    },
    DUPLICATE_IMPORT: function (name) {
        return {
            code: 1,
            params: {
                name: name
            }
        }
    },
    DUPLICATE_METHOD: function (className, name) {
        return {
            code: 2,
            params: {
                className: className,
                name: name
            }
        }
    },
    DUPLICATE_PROPERTY: function (className, name) {
        return {
            code: 3,
            params: {
                className: className,
                name: name
            }
        }
    },
    UNEXPECTED_TOKEN: function (token) {
        return {
            code: 4,
            params: {
                token: token
            }
        }
    },
    UNEXPECTED_EOL: function (token) {
        return {
            code: 5,
            params: {
                token: token
            }
        }
    },
    UNTERMINATED_STATEMENT: function (token, position) {
        return {
            code: 6,
            params: {
                token: token,
                position: position
            }
        }
    }
};