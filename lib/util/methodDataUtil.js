"use strict";

var _ = require("lodash");

/**
 * @type {VersionInfo}
 */
var methodDataByVersion = require("./methodDataByVersion");

/**
 * Gets a major version number and method name and returns all its aliases including itself.
 * @param {Number} version
 * @param {String} method
 * @returns {[String]}
 */
function expandAlias(version, method) {
    var methodData = methodDataByVersion[version];
    return [method].concat(methodData.aliases[method] || methodData.wrapperAliases[method] || []);
}

/**
 * Gets whether the suspect is an alias of the method in a given version
 * @param {Number} version
 * @param {string} method
 * @param {string} suspect
 * @returns {boolean}
 */
function isAliasOfMethod(version, method, suspect) {
    return _.includes(expandAlias(version, method), suspect);
}

module.exports = {
    isAliasOfMethod: isAliasOfMethod
};

/**
 * A hash of all aliases for a Lodash method
 @typedef {Object.<string, [string]>} Aliases
 */

/**
 * A JSON object containing method info for a specific lodash major version
 @typedef {Object} VersionInfo
 @property {Aliases} aliases
 @property {[string]} wrapper
 @property {Object.<string, [string]>} wrapperAliases
 @property {[string]} property
 @property {[string]} chainable
 */
