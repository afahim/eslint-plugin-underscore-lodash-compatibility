"use strict";
var methodDataUtil = require("./methodDataUtil");
var astUtil = require("./astUtil");

/**
 * Returns whether the node is a underdash call with the specified pragma
 * @param {Object} node
 * @param {string} pragma
 * @returns {boolean}
 */
function isUnderdashCall(node, pragma) {
    return astUtil.isCallFromObject(node, pragma);
}

/**
 * Returns whether the node is an implicit chain start, '_(obj)...'
 * @param {Object} node
 * @param {string} pragma
 * @returns {boolean}
 */
function isImplicitChainStart(node, pragma) {
    return node.callee.name === pragma;
}

/**
 * Returns whether the node is an explicit chain start, '_.chain(obj)...'
 * @param {Object} node
 * @param {string} pragma
 * @returns {boolean}
 */
function isExplicitChainStart(node, pragma) {
    return isUnderdashCall(node, pragma) && astUtil.getMethodName(node) === "chain";
}

/**
 * Returns whether the node specified is a chain start, implicit or explicit
 * @param {Object} node
 * @param {string} pragma
 * @returns {undefined|boolean}
 */
function isUnderdashChainStart(node, pragma) {
    return node && node.type === "CallExpression" && (isImplicitChainStart(node, pragma) || isExplicitChainStart(node, pragma));
}

/**
 * Returns whehter the node is a chain breaker method in the specified version
 * @param {Object} node
 * @param {number} version
 * @returns {boolean}
 */
function isChainBreaker(node, version) {
    return methodDataUtil.isAliasOfMethod(version, "value", astUtil.getMethodName(node));
}

/**
 * Gets the context's Underdash settings and a function and returns a visitor that calls the function for every Underdash or chain call
 * @param {UnderdashSettings} settings
 * @param {UnderdashReporter} reporter
 * @returns {NodeTypeVisitor}
 */
function getUnderdashMethodVisitor(settings, reporter) {
    return function (node) {
        if (isUnderdashChainStart(node, settings.pragma)) {
            node = node.parent.parent;
            while (astUtil.isMethodCall(node) && !isChainBreaker(node, settings.version)) {
                reporter(node);
                node = node.parent.parent;
            }
        } else if (isUnderdashCall(node, settings.pragma)) {
            reporter(node);
        }
    };
}

module.exports = {
    isUnderdashCall: isUnderdashCall,
    isUnderdashChainStart: isUnderdashChainStart,
    isChainBreaker: isChainBreaker,
    isImplicitChainStart: isImplicitChainStart,
    isExplicitChainStart: isExplicitChainStart,
    getUnderdashMethodVisitor: getUnderdashMethodVisitor
};

/**
 @callback UnderdashReporter
 @param {Object} node
 @param {Object} iteratee
 */

/**
 @callback NodeTypeVisitor
 @param {Object} node
 */

/**
 * @typedef {Object} ShorthandChecks
 * @property {function} canUseShorthand
 * @property {function} usesShorthand
 */

/**
 * @typedef {object} ShorthandMessages
 * @property {string} always
 * @property {string} never
 */
