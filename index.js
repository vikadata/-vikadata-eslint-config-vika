module.exports = {
  parser: "@typescript-eslint/parser",
  plugins: [
    "@typescript-eslint",
    "react-hooks",
    "react"
  ],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "react-hooks/exhaustive-deps": "warn",
    "no-extra-boolean-cast": 0,
    "no-case-declarations": 0,
    "no-multi-spaces": "warn",
    "no-prototype-builtins": 0, // 不允许直接使用原型链上的内置函数
    "@typescript-eslint/ban-types": 0,
    "jsx-a11y/anchor-is-valid": 0,
    "prefer-spread": 0,
    "no-async-promise-executor": 0, // Promise 中不允许包裹 async 执行函数
    "prefer-rest-params": 0, // 使用 rest 替换 arguments
    "@typescript-eslint/no-inferrable-types": 0,
    "@typescript-eslint/no-empty-function": 0,
    "@typescript-eslint/no-non-null-asserted-optional-chain": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "@typescript-eslint/no-non-null-assertion": 0, // 不允许使用呢 ts 的 ！做断言
    "@typescript-eslint/no-explicit-any": 0, // 不允许使用 any
    "@typescript-eslint/semi": 1,
    "comma-dangle": [
      "warn",
      "only-multiline",
      {
        "functions": "never"
      }
    ],
    "max-len": [ // 单行允许的最多的字符数
      "warn",
      {
        "code": 150
      }
    ],
    "no-console": 0,
    "no-debugger": 1,
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    // 函数的圆括号前是否允许空格
    "space-before-function-paren": [
      "warn",
      "never"
    ],
    "@typescript-eslint/naming-convention": [
      "warn",
      {
        "selector": "enumMember",
        "format": [
          "PascalCase",
          "UPPER_CASE"
        ]
      },
      {
        "selector": "interface",
        "prefix": [
          "I"
        ],
        "format": [
          "PascalCase"
        ]
      },
      {
        "selector": "typeLike",
        // "prefix": [
        //   "I"
        // ],
        "format": [
          "PascalCase"
        ]
      },
      {
        "selector": "variable",
        "format": [
          "camelCase",
          "UPPER_CASE",
          "PascalCase"
        ],
        "leadingUnderscore": "allow", // 变量名以 _ 开头
        "trailingUnderscore": "forbid" // 变量名以 _ 结尾
      },
      {
        "selector": "parameter",
        "format": [
          "camelCase",
          "PascalCase"
        ],
        "leadingUnderscore": "allow"
      }
    ],
    "semi": [
      "warn",
      "always"
    ],
    "react/self-closing-comp": [
      "warn",
      {
        "component": true,
        "html": true
      }
    ],
    "react/jsx-equals-spacing": [
      2,
      "never"
    ],
    "react/jsx-wrap-multilines": 0,
    "no-fallthrough": 1,
    "no-unused-expressions": 0, // 禁止出现未使用过的表达式
    "quote-props": [
      "warn",
      "as-needed"
    ],
    "quotes": [
      "warn",
      "single",
      {
        "avoidEscape": true
      }
    ],
    "no-multiple-empty-lines": [
      "warn",
      {
        "max": 1,
        "maxEOF": 1
      }
    ],
    "react/jsx-boolean-value": [
      "warn",
      "never"
    ],
    "indent": [
      "warn",
      2,
      {
        "SwitchCase": 1,
        "VariableDeclarator": "first",
        "MemberExpression": 1,
        "flatTernaryExpressions": false
      }
    ],
    "no-inner-declarations": 0,
    // "default-case": 1, // 要求 switch 语句中有 default 分支
    "no-else-return": 1, // 禁止 if 语句中有 return 之后有 else
    "array-bracket-spacing": 1,
    "@typescript-eslint/no-unused-vars": [
      "warn",
      {
        "args": "none"
      }
    ],
    "require-await": 2,
    // 对象
    "object-curly-spacing": [
      "warn",
      "always",
      {
        "objectsInObjects": false
      }
    ]
  }

};
