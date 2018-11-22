/**
 * Exercise 2.6 - Find the Door
 * 
 * You are facing a wall that stretches innitely in both directions.
 * There is a door in the wall, but you know neither how far away nor in
 * which direction. You can see the door only when you are right next to it. Design
 * and write code for an algorithm that enables you to reach the door by walking at
 * most O(n) steps where n is the (unknown to you) number of steps between your
 * initial position and the door. (Hint: walk alternately right and left going each
 * time exponentially farther from your initial position.)
 * 
 * @param {number} stepsToTake 
 * @param {number} doorLocation 
 */
function findDoor(stepsToTake, doorLocation) {
    let found = false;
    let stepsTaken = 0;
    let currentLocation = 0;
    while (!found) {
        stepsToTake++;
        currentLocation += stepsToTake;
        stepsTaken += stepsToTake;
        if (doorLocation < stepsToTake && doorLocation > 0) found = true;
        currentLocation -= stepsToTake * 2;
        stepsTaken += stepsToTake * 2;
        if (doorLocation > stepsToTake && doorLocation < 0) found = true;
        currentLocation += stepsToTake;
        stepsTaken += stepsToTake;
    }
    return stepsTaken;
}

const doorLocation = Math.floor(Math.random() * 100);
console.log(`Number of back and forths to find the door at spot ${doorLocation}: ${findDoor(1, doorLocation)}`);
