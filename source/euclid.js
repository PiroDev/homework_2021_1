'use strict';

/**
 * Takes sequence of values and fiters it (only natural numbers remain).
 * If filtered sequence is not empty finds GCD
 * @param  {...any} values Sequence of values of any type
 * 
 * @returns {number} GCD of natural numbers from provided sequence.
 * If no natural numbers were provided returns -1
 */
function euclid(...values) {
    const naturalNumbers = values.filter((value) => Number.isInteger(value) && value >= 1);

    if (!naturalNumbers.length) {
        return -1;
    }

    return findGCD(...naturalNumbers);
}

/**
 * Takes natural numbers and retuns their greatest common divisor (GCD)
 * @param  {...number} numbers Sequence of natural numbers
 * 
 * @returns {number} GCD of provided numbers
 */
function findGCD(...numbers) {
    let firstNumber = numbers[0];

    for (let secondNumber of numbers.slice(1)) {

        while (firstNumber && secondNumber) {
            (firstNumber > secondNumber) ? firstNumber %= secondNumber :
                secondNumber %= firstNumber;
        }

        firstNumber += secondNumber;
    }

    return firstNumber;
}