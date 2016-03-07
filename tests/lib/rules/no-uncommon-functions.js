/**
 * @fileoverview Ensures that methods being used are available in both underscore and lodash.
 * @author Afnan Fahim
 * @copyright 2016 Afnan Fahim. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------
var RuleTester = require("eslint").RuleTester;
var rule = require("../../../lib/rules/no-uncommon-functions");


//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-uncommon-functions", rule, {

    valid: [
        "_.includes([1, 2, 3], 2);",
        "_.uniq([1, 2, 3, 1, 3, 2]);",
        "_.last([1, 2, 3]);"
    ],

    invalid: [
        {
            code: "_.contains([1, 2, 3], 2);",
            errors: ["_.contains only exists in underscore and not in lodash."]
        },
        {
            code: "_.unique([1, 2, 3, 1, 3, 2]);",
            errors: ["_.unique only exists in underscore and not in lodash."]
        },
        {
            code: "_.ceil(1.62);",
            errors: ["_.ceil only exists in lodash and not in underscore."]
        },
        {
            code: "_.capitalize(\"not capitalized\");",
            errors: ["_.capitalize only exists in lodash and not in underscore."]
        }
    ]
});
