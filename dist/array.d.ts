/**
 * If array return first item
 * @function unArray
 * @param {Array} arr
 */
export function unArray(arr: any[]): any;
/**
 * @function range
 * @param {Number} begin
 * @param {Number} end
 * @param {Number} interval
 */
export function range(begin: number, end: number, interval?: number): Generator<number, void, unknown>;
/**
 * Convert Buffer in Array
 * @param {Buffer|ArrayBuffer|string} buf dataBuffer
 * @returns {Array} chunked
 * @example
 * buffToArray('A03B18') // return ['A0','3B','18']
 */
export function buffToArray(buf: Buffer | ArrayBuffer | string, size?: number): any[];
/**
 * @function medianInArray
 * @param {Array<Number>} arr array of Numbers
 * @param {Boolean} withZero
 * @returns {Number}
 */
export function medianInArray(arr: Array<number>, withZero?: boolean): number;
/**
 * @function averageInArray
 * @param {Array<Number>} arr array of Numbers
 * @param {Boolean} withZero
 * @returns {Number}
 */
export function averageInArray(arr: Array<number>, withZero: boolean): number;
