/**
 * Exercises 1.1 - #4
 * Design an algorithm for computing the floored square root for any positive integer n.
 * Besides assignment and comparison, your algorithm may only use the four basic arithmetical operations.
 * 
 * @param {number} number 
 */
function flooredSquareRoot(number) {
    let i = 1;
    let result = 1;
    while (result <= number) {
        i++;
        result = i * i;
    }
    return i - 1;
}

// put user input here
let root = flooredSquareRoot(141);
console.log(root);