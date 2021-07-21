module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
        "ecmaVersion": 12
    },
    "rules": {
        'no-void': 'off', // conflicting with recommendation from @typescript-eslint/no-floating-promises
        // FIXME warnings below this line need to be checked and fixed. Line end comments below are number of findings per rule on 24.03.2021
        '@typescript-eslint/no-misused-promises': 'off', // 97
        '@typescript-eslint/explicit-function-return-type': 'off', // 132
        '@typescript-eslint/restrict-plus-operands': 'off', // 292
        '@typescript-eslint/strict-boolean-expressions': 'off', // 388
        '@typescript-eslint/restrict-template-expressions': 'off', // 466
        '@typescript-eslint/no-var-requires': 'off' // 502
    }
};
