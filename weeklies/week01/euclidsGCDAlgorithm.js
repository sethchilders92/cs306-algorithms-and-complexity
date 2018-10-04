/**
 * Exercises 1.1 - #8
 * What does Euclid's algorithm do for a pair of integers in which the first is
 * smaller than the second? 
 * 
 * Euclid's algorithm will switch the two numbers in the first iteratation, but
 * it will still solve for the GCD correctly, as if the first number were larger.
 * 
 * What is the maximum number of times this can happen
 * during the algorithm's execution on such an input?
 * 
 * This will only happen for the first iteration of the Euclidean algorithm. After
 * this first iteration, the numbers will switch and the first number will then be
 * the larger number and the second number will then be the smaller. This switch
 * will only happen on the first iteration if the first number is smaller.
 * 
 * @param {number} m Non-zero integer
 * @param {number} n Non-zero integer
 */
function findGCD(m, n) {
    let i = 0;
    let remainder = 1;

    while (n !== 0) {
        i++;
        remainder = m % n;
        m = n;
        n = remainder;
    }
    
    return { 
        gcd: m, 
        loopCount: i
    };
}

// put user input here
let result = findGCD(10, 12);
console.log(`findGCD(10, 12)`);
console.log(`The GCD is: ${result.gcd}`);
console.log(`The number of times the while loop ran: ${result.loopCount}`);