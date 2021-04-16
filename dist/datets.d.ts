/**
 * Checks if string is a date | datetime | time
 * @function isValidDate
 * @example
 * isValidDate('12/12/2012', 'DD/MM/YYYY') // true
 * isValidDate('50/12/2012', 'DD/MM/YYYY') // false
 */
export declare function isValidDate(value: string, from?: string | string[]): boolean;
