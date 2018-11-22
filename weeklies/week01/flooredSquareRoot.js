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
console.log(`141 should be 11: ${flooredSquareRoot(141)}`);
console.log(`111 should be 10: ${flooredSquareRoot(111)}`);
console.log(`15 should be 3: ${flooredSquareRoot(15)}`);
console.log(`19 should be 4: ${flooredSquareRoot(19)}`);
console.log(`54 should be 7: ${flooredSquareRoot(54)}`);
console.log(`254 should be 15: ${flooredSquareRoot(254)}`);
console.log(`369 should be 19: ${flooredSquareRoot(369)}`);