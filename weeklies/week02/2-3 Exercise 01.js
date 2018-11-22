/**
* Exercises 2.3 - #01
* Compute the following sums.

* a. 1 + 3 + 5 + 7 + ... + 999
* b. 2 + 4 + 8 + 16 + ... + 1024
* c. Summation (n + 1, i=3, 1)
* d. Summation (n + 1, i=3, i)
* e. Summation (n - 1, i=0, i + 1)
* f. Summation (n, j=1, 3<sup>j + 1</sup>)
* g. Summation (n, i=1 Summation (n, j=1, ij))
* h. Summation (n, i=1, 1/i(i + 1))
*/
function a(currVal, max) {
    let total = 0;
    do {
        total += currVal;
        currVal += 2;
    } while (currVal <= max)
    return total;
}

function b(currVal, max) {
    let total = 0;
    do {
        total += currVal;
        currVal *= 2;
    } while (currVal <= max)
    return total;
}

function c(max) {
    let val = 0;
    for (let i=3; i <= max; i++) {
        val = i - 1;
    }
    return val;
}

console.log(`a. 1 + 3 + 5 + 7 + ... + 999 = ${a(1, 999)}`);
console.log(`b. 2 + 4 + 8 + 16 + ... + 1024 = ${b(2, 1024)}`);
console.log(`c. Summation (n + 1, i=3, 1) = ${c(8)}`);
