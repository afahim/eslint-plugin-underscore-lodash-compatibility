# Ensures that methods being used are available in both underscore and lodash. (no-uncommon-methods)

While similar in purpose, underscore and lodash don't have the exact
same functions.


## Rule Details

This rule aims to alert whenever a function is being used that isn't
available in either lodash or underscore. Enabling this rule will ensure
that both the libraries have the function that you are using. In case
you are using an alias that is only available in either of the
libraries, the rule will still alert you against it.

The following patterns are considered warnings:

```js

_.includes([1, 2, 3], 2);

_.uniq([1, 2, 3, 1, 3, 2]);
_.last([1, 2, 3]);

```

The following patterns are not warnings:

```js

_.contains([1, 2, 3], 2);
_.unique([1, 2, 3, 1, 3, 2]);

```
