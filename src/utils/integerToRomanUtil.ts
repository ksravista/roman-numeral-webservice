import { INTEGER_ROMAN_MAPPING } from '../constants/integerToRomanMappingConstants';
import { InvalidInputError } from '../errors/InvalidInputError';
/**
 * Util function to convert a given integer to a roman numeral string
 * Time and Complexity: O(1) because the allowed numbers are finite (1-3999)
 * @param input an integer value to convert which should be in range 1 - 3999 inclusive.
 * @returns the Roman numeral as a string. If a number outside of the range is passed, an exception is thrown
 */
export const integerToRoman = (input: number) => {

    if (input < 1 || input > 3999) {
        throw new InvalidInputError(
            `Invalid Input: ${input} cannot be converted to roman numeral`
        );
    }

    const stringBuilder: string[] = [];
    for (let i = 0; i < INTEGER_ROMAN_MAPPING.length && input > 0; i++) {

        //greedily pick the biggest number possible
        while (INTEGER_ROMAN_MAPPING[i].integer <= input) {
            input = input - INTEGER_ROMAN_MAPPING[i].integer;
            stringBuilder.push(INTEGER_ROMAN_MAPPING[i].roman);
        }
    }

    return stringBuilder.join('');
};
