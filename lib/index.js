/**
 * @fileoverview Ensures your javascript can use underscore or lodash interchangeably as a dependency.
 * @author Afnan Fahim
 * @copyright 2016 Afnan Fahim. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

module.exports = {
    rules: {
        "no-uncommon-functions": require("./rules/no-uncommon-functions"),
        "no-deprecated-functions": require("./rules/no-deprecated-functions")
    },
    rulesConfig: {
        "no-uncommon-functions": 2,
        "no-deprecated-functions": 2
    }
};



