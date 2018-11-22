/**
 * Exercises 4.3
 * Create Three Different Algorithms to Solve this Problem. Given two
 * positive numbers A and B, where A is greater than B, nd a way to break up A
 * into B unequal pieces.
 * 
 * For example, if A = 34 and B = 4, then four unequal pieces of A are 6, 7, 9
 * and 12. These are unequal because there are no duplicate numbers. They break
 * up (or sum up to) 34 because 6 + 7 + 9 + 12 = 34. The numbers representing the
 * pieces (e.g., 6, 7, 9 and 12) must be positive integers (1, 2, 3, etc.), which excludes
 * zero. Note that some pairs of numbers don't work, e.g., 5 and 3, so be sure to
 * error-check that case.
 * 
 * Algorithm One:
 * 1. Create array of size 'b' - 1 with each element being its own index
 * 2. Create a variable 'total' that is all the elements in the array added together
 * 3. Subtract the 'total' from 'a' for the last value
 * 4. Each element in the array is a unique number, and the last value is the calculated
 * total from step 3
 * 
 * Algorithm Two:
 * 1. Create an array of size b
 * 2. Use a random function to generate a random number between 0 and 'a' - 'b' for each element in the array
 * 3. If each element isn't unique and if the total of the random numbers doesn't add up to 'a', repeat
 * 4. Repeat step 3 as many times as necessary
 * 
 * Algorithm Three: 
 * 1. Split 'a' into 'b - 1' even groups in an array
 * 2. In a loop, subtract 'i' from a group each iteration (i will increase by one for each element)
 * 3. Iterate i one extra time and save it as the last element in the array
 */
function algorithmOne(a, b) {
    // create an array of length 'b - 1' and fill it with zeros
    let numArray = Array(b - 1).fill(0);
    // put each elements index as its value in the array, then add the indexes up
    let total = numArray.reduce((acc, num, i) => acc += i + 1, 0);
    // subtract the total of your indexes from a to give you the last needed value
    let lastNum = a - total;
    // add the last value to the array and return it
    return numArray.concat(lastNum);
}

console.log(algorithmOne(34, 4));
