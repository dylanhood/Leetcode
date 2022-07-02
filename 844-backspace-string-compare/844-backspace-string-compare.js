/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {

    
        const getTyped = (input) => {
            const result = []
        for(let char of input) {
            if (char === '#') {
                result.pop()
            } else {
                result.push(char)
            }
        }
            return result.join()
        }
    
        return getTyped(S) === getTyped(T)
};