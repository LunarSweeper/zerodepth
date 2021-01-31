"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findZeros = exports.hasZero = void 0;
function hasZero(a) {
    return a.indexOf(0) !== -1;
}
exports.hasZero = hasZero;
function findZeros(a) {
    const levels = [];
    function traverseArray(values, depth) {
        if (depth > 100) {
            // Maximum recursion depth reached
            return;
        }
        // Does current array have zeros?
        if (hasZero(values)) {
            levels.push(depth);
        }
        // Recurse into nested arrays
        values
            .filter(item => Array.isArray(item))
            .forEach(item => {
            traverseArray(item, depth + 1);
        });
    }
    traverseArray(a, 1);
    if (levels.length === 0) {
        return [null, null];
    }
    return [Math.min(...levels), Math.max(...levels)];
}
exports.findZeros = findZeros;
