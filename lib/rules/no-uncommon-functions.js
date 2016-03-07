/**
 * @fileoverview Ensures that methods being used are available in both underscore and lodash.
 * @author Afnan Fahim
 * @copyright 2016 Afnan Fahim. All rights reserved.
 * See LICENSE file in root directory for full license.
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = function(context) {

    var lodash = require("lodash");

    var underdashUtil = require("../util/underdashUtil"),
        astUtil = require("../util/astUtil"),
        settings = require("../util/settingsUtil").getSettings(context);

    var lodashMethods = require("../util/lodashMethods"),
        underscoreMethods = require("../util/underscoreMethods");

    var methodsCommonInBothLibraries = lodash.intersection(lodashMethods, underscoreMethods);

    var METHOD_ONLY_IN_UNDERSCORE = "_.{{methodName}} only exists in underscore and not in lodash.",
        METHOD_ONLY_IN_LODASH = "_.{{methodName}} only exists in lodash and not in underscore.";


    //--------------------------------------------------------------------------
    // Helpers
    //--------------------------------------------------------------------------


    //--------------------------------------------------------------------------
    // Public
    //--------------------------------------------------------------------------

    return {

        CallExpression: underdashUtil.getUnderdashMethodVisitor(settings, function (node) {
            var methodName = astUtil.getMethodName(node);

            if (!lodash.includes(methodsCommonInBothLibraries, methodName)) {
                if (lodash.includes(underscoreMethods, methodName)) {
                    context.report(node, METHOD_ONLY_IN_UNDERSCORE, {
                        methodName: methodName
                    });
                } else {
                    context.report(node, METHOD_ONLY_IN_LODASH, {
                        methodName: methodName
                    });
                }
            }
        })

    };
};

module.exports.schema = [];
