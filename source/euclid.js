'use strict';

/**
 * Takes sequence of values and fiters it (only natural numbers remain).
 * If filtered sequence is not empty finds GCD
 * @param  {...any} values Sequence of values of any type
 * 
 * @returns {number} GCD of natural numbers from provided sequence.
 * If no natural numbers were provided returns -1
 */
const euclid = (...values) => {
    const naturalNumbers = values.filter((value) => Number.isInteger(value) && value >= 1);

    if (naturalNumbers.length === 0) {
        return -1;
    }

    return naturalNumbers.reduce(findGCD);
};

/**
 * Takes two natural numbers and returns their greatest common divisor (GCD)
 * @param {number} firstNumber
 * @param {number} secondNumber 
 * 
 * @returns {number} GCD of provided numbers
 */
const findGCD = (firstNumber, secondNumber) => {
    while (firstNumber !== 0 && secondNumber !== 0) {
        (firstNumber > secondNumber) ? firstNumber %= secondNumber :
            secondNumber %= firstNumber;
    }

    return firstNumber + secondNumber;
}
