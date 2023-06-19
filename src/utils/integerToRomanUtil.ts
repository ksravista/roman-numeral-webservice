import { INTEGER_ROMAN_MAPPING } from '../constants/integerToRomanMappingConstants';
import { InvalidInputError } from '../errors/InvalidInputError';
/**
 * Util function to convert a given integer
 * @param input an integer value to convert which should be in range 1 - 3999 inclusive.
 * @returns the Roman numeral as a string. If a number outside of the range is passed, an exception is thrown
 */
export const integerToRoman = (input: number) => {
    //TODO: this function makes a big assumption that INTEGER_ROMAN_MAPPING is sorted based on the integer value
    if (input < 1 || input > 3999) {
        throw new InvalidInputError(
            `Invalid Input: ${input} cannot be converted to roman numeral`
        );
    }

    const stringBuilder: string[] = [];
    for (let i = 0; i < INTEGER_ROMAN_MAPPING.length && input > 0; i++) {
        while (INTEGER_ROMAN_MAPPING[i].integer <= input) {
            input = input - INTEGER_ROMAN_MAPPING[i].integer;
            stringBuilder.push(INTEGER_ROMAN_MAPPING[i].roman);
        }
    }

    return stringBuilder.join('');
};
