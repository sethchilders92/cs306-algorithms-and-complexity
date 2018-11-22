/**
 * Exercises 1.2 - #4
 * Write pseudocode for an algorithm for finding real roots of equation ax^2 + bx + c = 0
 * for arbitrary real coefficients a, b, and c. (You may assume the availability of the square root function sqrt(x).)
 * 
 * @param {number} a The value for variable 'a' in the quadratic formula 
 * @param {number} b The value for variable 'b' in the quadratic formula 
 * @param {number} c The value for variable 'c' in the quadratic formula 
 */
function findDiscriminant(a, b, c) {
    let x = 0;
    let discriminant = Math.pow(b, 2) - (4 * a * c);
    let numSolutions = 0;
    if (discriminant < 0) {
        numSolutions = -2;
    } else if (discriminant === 0) {
        numSolutions = 1;
    } else {
        numSolutions = 2;
    }
    return { 
        discriminant, 
        numSolutions
    };
}

function calculateRoot(a, b, c, discriminant) {
    let x = -b;
    let roots = [];
    // if the discriminant was zero
    if (discriminant.numSolutions === 1) {
        x = x / (2 * a);
        roots.push(x);
        return roots;
        // if the discriminant was positive
    } else if (discriminant.numSolutions === 2) {
        let x1 = x;
        x = (x - Math.sqrt(discriminant.discriminant)) / (2 * a);
        x1 = (x1 + Math.sqrt(discriminant.discriminant)) / (2 * a);
        roots.push(x);
        roots.push(x1);
        return roots;
        // if the discriminant was negative
    } else if (discriminant.numSolutions === -2) {
        console.log('There are no real roots, but we\'ll log -1 anyways')
        roots.push(-1);
        return roots;
    }
}

function main(a, b, c) {
    // put user input here
    let discriminant = findDiscriminant(a, b, c);
    let roots = calculateRoot(a, b, c, discriminant);
    
    console.log(`The ${discriminant.numSolutions > 1 ? 'roots': 'root'} for ${a}x^2 + ${b}x + ${c} ${discriminant.numSolutions > 1 ? 'are': 'is'}: ${roots}`);
    return;
}

main(9, 12, 4);
main(8, 10, 3);
main(15, 2, 1);