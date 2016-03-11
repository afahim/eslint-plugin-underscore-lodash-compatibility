"use strict";

module.exports = {
    lodash: {
        aliases: {
            forEach: [
                "each"
            ],
            assign: [
                "extend"
            ],
            first: [
                "head"
            ],
            zipObject: [
                "object"
            ],
            rest: [
                "tail"
            ],
            uniq: [
                "unique"
            ],
            reduce: [
                "foldl",
                "inject"
            ],
            reduceRight: [
                "foldr"
            ],
            some: [
                "any"
            ],
            map: [
                "collect"
            ],
            includes: [
                "contains",
                "include"
            ],
            flowRight: [
                "backflow",
                "compose"
            ],
            isEqual: [
                "eq"
            ],
            every: [
                "all"
            ],
            find: [
                "detect"
            ],
            forEachRight: [
                "eachRight"
            ],
            filter: [
                "select"
            ],
            functions: [
                "methods"
            ],
            callback: [
                "iteratee"
            ],
            assignIn: [
                "extend"
            ],
            assignInWith: [
                "extendWith"
            ]
        },
        wrapperAliases: {
            value: [
                "run",
                "toJSON",
                "valueOf"
            ]
        }
    },
    underscore: {
        aliases: {
            each: [
                "forEach"
            ],
            map: [
                "collect"
            ],
            reduceRight: [
                "foldr"
            ],
            reduce: [
                "foldl",
                "inject"
            ],
            filter: [
                "select"
            ],
            every: [
                "all"
            ],
            some: [
                "any"
            ],
            find: [
                "detect"
            ],
            contains: [
                "includes"
            ],
            first: [
                "head",
                "take"
            ],
            rest: [
                "tail",
                "drop"
            ],
            uniq: [
                "unique"
            ],
            functions: [
                "methods"
            ],
            extendOwn: [
                "assign"
            ],
            matcher: [
                "matches"
            ]
        },
        wrapperAliases: {
            value: [
                "toString",
                "toJSON",
                "valueOf"
            ]
        }
    }
};
