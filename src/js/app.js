/** 
 * The String code library.
 * @namespace NString
 */
/**
 * Concat 2 string.
 * @param {String} strA 
 * @param {String} strB 
 * @return The concat string.
 * @function concatString
 * @memberof NString
 */
function concatString(strA, strB) {
    return strA + strB;
};

exports.concatString = module.exports.concatString = concatString;