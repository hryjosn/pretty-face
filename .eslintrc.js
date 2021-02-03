module.exports = {
    "parser": "babel-eslint",
    "plugins": ["react", "jest", "prettier"],
    "extends": ["prettier", "prettier/react"],
    "env": {
        "jest": true
    },
    "globals": {
        "React": true,
        "document": true,
        "window": true,
        "localStorage": true,
        "fetch": true
    },
    "root": true,
    "rules": {
        "prettier/prettier": "error",
        "react/jsx-filename-extension": "off",
        "react/forbid-prop-types": "off",
        "react/no-array-index-key": "off"
    }
};
