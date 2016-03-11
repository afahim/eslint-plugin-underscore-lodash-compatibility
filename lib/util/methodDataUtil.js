"use strict";

var _ = require("lodash");

/**
 * @type {VersionInfo}
 */
var aliasesData = require("./aliasesData");

/**
 * Gets a major method name and returns all its aliases including itself.
 * @param {String} method
 * @returns {[String]}
 */
function expandAlias(method) {
    var aliases = _.concat(aliasesData.lodash.aliases, aliasesData.underscore.aliases);
    var wrapperAliases = _.concat(aliasesData.lodash.wrapperAliases, aliasesData.underscore.wrapperAliases);
    return [method].concat(aliases[method] || wrapperAliases[method] || []);
}

/**
 * Gets whether the suspect is an alias of the method
 * @param {string} method
 * @param {string} suspect
 * @returns {boolean}
 */
function isAliasOfMethod(method, suspect) {
    return _.includes(expandAlias(method), suspect);
}

module.exports = {
    isAliasOfMethod: isAliasOfMethod
};

/**
 * A hash of all aliases for a Lodash method
 @typedef {Object.<string, [string]>} Aliases
 */

/**
 * A JSON object containing method info for a specific lodash/underscore major version
 @typedef {Object} VersionInfo
 @property {Aliases} aliases
 @property {[string]} wrapper
 @property {Object.<string, [string]>} wrapperAliases
 @property {[string]} property
 @property {[string]} chainable
 */
