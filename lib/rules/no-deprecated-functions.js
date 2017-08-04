/**
 * @fileoverview Ensures that methods being used aren't deprecated in lodash 4.
 * @author Tim Thomas
 * @copyright 2016 Afnan Fahim. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function (context) {

    var _ = require("lodash");

    var underdashUtil = require("../util/underdashUtil"),
        astUtil = require("../util/astUtil"),
        settings = require("../util/settingsUtil").getSettings(context);

    var lodashDeprecated = require("../util/lodashDeprecated"),
        lodashDeprecatedMethods = Object.keys(lodashDeprecated);

    var METHOD_IS_DEPRECATED = "_.{{methodName}} is deprecated in lodash 4.";


    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------


    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        CallExpression: underdashUtil.getUnderdashMethodVisitor(settings, function (node) {
            var methodName = astUtil.getMethodName(node);

            if (_.includes(lodashDeprecatedMethods, methodName)) {
                context.report({
                    node: node,
                    message: METHOD_IS_DEPRECATED,
                    data: {
                        methodName: methodName,
                        fix: function (fixer) {
                            var fixedMethodName = lodashDeprecated[methodName];
                            if (fixedMethodName) {
                                fixer.replaceText(methodName, fixedMethodName);
                            }
                        }
                    }
                });
            }
        })

    };
};

module.exports.schema = [];
