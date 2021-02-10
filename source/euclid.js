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

    const reducerGCD = (accumulatedGCD, currentNumber) => {

        while (accumulatedGCD !== 0 && currentNumber !== 0) {
            (accumulatedGCD > currentNumber) ? accumulatedGCD %= currentNumber :
                currentNumber %= accumulatedGCD;
        }

        return accumulatedGCD + currentNumber;
    }

    return naturalNumbers.reduce(reducerGCD);
};
