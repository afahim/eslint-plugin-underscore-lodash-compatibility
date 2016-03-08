[![Build Status](https://travis-ci.org/afahim/eslint-plugin-underscore-lodash-compatibility.svg?branch=master)](https://travis-ci.org/afahim/eslint-plugin-underscore-lodash-compatibility)

# eslint-plugin-underscore-lodash-compatibility

Ensures your javascript can use underscore or lodash interchangeably as a dependency.

If you maintain a codebase and are thinking of moving over to lodash, this plugin can help. It can ensure your code uses only the subset of underscore that is compatible with lodash. Once you get to that point, you can replace your underscore dependency with lodash and complete the migration.

**Note:** This plugin is under development, and a few more rules should be coming up (contributions welcome!). Also, due to the limitations of static analysis, this plugin can only do a best effort, and doesn't absolutely guarantee that your code will be fully compatible with both libraries.

## Installation

You'll first need to install [ESLint](http://eslint.org):

```
$ npm i eslint --save-dev
```

Next, install `eslint-plugin-underscore-lodash-compatibility`:

```
$ npm install eslint-plugin-underscore-lodash-compatibility --save-dev
```

**Note:** If you installed ESLint globally (using the `-g` flag) then you must also install `eslint-plugin-underscore-lodash-compatibility` globally.

## Usage

Add `underscore-lodash-compatibility` to the plugins section of your `.eslintrc` configuration file. You can omit the `eslint-plugin-` prefix:

```json
{
    "plugins": [
        "underscore-lodash-compatibility"
    ]
}
```


Then configure the rules you want to use under the rules section.

```json
{
    "rules": {
        "underscore-lodash-compatibility/rule-name": 2
    }
}
```

## Supported Rules

* [no-uncommon-functions](docs/rules/no-uncommon-functions.md): Disallow functions that don't exist in lodash or underscore


## License and Copyright

Copyright 2016 Afnan Fahim. All rights reserved.

[MIT License](http://en.wikipedia.org/wiki/MIT_License)
