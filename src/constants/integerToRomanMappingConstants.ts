export const INTEGER_ROMAN_MAPPING = [
    { integer: 1000, roman: 'M' },
    { integer: 900, roman: 'CM' },
    { integer: 500, roman: 'D' },
    { integer: 400, roman: 'CD' },
    { integer: 100, roman: 'C' },
    { integer: 90, roman: 'XC' },
    { integer: 50, roman: 'L' },
    { integer: 40, roman: 'XL' },
    { integer: 10, roman: 'X' },
    { integer: 9, roman: 'IX' },
    { integer: 5, roman: 'V' },
    { integer: 4, roman: 'IV' },
    { integer: 1, roman: 'I' }
].sort((m1, m2) => m2.integer - m1.integer);
