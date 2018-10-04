/**
 * Exercises 1.1 - #12
 * There are n lockers in a hallway, numbered sequentially from 1 to n. Initially, 
 * all the locker doors are closed. You make n passes by the lockers, each time 
 * starting with locker #1. On the ith pass, i =1, 2, ..., n, you toggle the door
 * of every ith locker: if the door is closed, you open it; if it is open, you close it.
 * After the last pass, which locker doors are open and which are closed? How many
 * of them are open?
 */
function toggleLockers(numLockers) {
    // create an array of length 'numLockers' and fill it with zeros
    let lockers = Array(numLockers).fill(0);
    // create an array with each locker's 1-based index
    let lockerNumbers = lockers.map((locker, i) => i + 1);
    // create an array with the locker's that are perfect squares
    let openLockers = lockerNumbers.filter(locker => Math.sqrt(locker) % 1 === 0);
    console.log(`The lockers that are open are: ${openLockers}`);
    return;
}

// put the number of lockers here
let numLockers = 100;
toggleLockers(numLockers);
