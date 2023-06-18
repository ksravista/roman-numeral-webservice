import { InvalidInputError } from "../../src/errors/InvalidInputError";
import { integerToRoman } from "../../src/utils/integerToRomanUtil";

describe("Integer to Roman Util tests", () => {

    test("if 1 is passed in the correct values is returned", () => {
        const expectedAnswer = 'I';
        expect(integerToRoman(1)).toEqual(expectedAnswer);
    });

    test("if 9 is passed in the correct values is returned", () => {
        const expectedAnswer = 'IX';
        expect(integerToRoman(9)).toEqual(expectedAnswer);
    });

    test("if 8 is passed in the correct values is returned", () => {
        const expectedAnswer = 'VIII';
        expect(integerToRoman(8)).toEqual(expectedAnswer);
    });

    test("if 2690 is passed in the correct values is returned", () => {
        const expectedAnswer = 'MMDCXC';
        expect(integerToRoman(2690)).toEqual(expectedAnswer);
    });

    test('if 0 is passed, then an error is thrown', () => {
        expect(() => {
            integerToRoman(0);
        }).toThrow(InvalidInputError);
    });

    test('if number > 3999 is passed, then an error is thrown', () => {
        expect(() => {
            integerToRoman(4000);
        }).toThrow(InvalidInputError);
    });

    test('if -1 is passed, then an error is thrown', () => {
        expect(() => {
            integerToRoman(4000);
        }).toThrow(InvalidInputError);
    });

});