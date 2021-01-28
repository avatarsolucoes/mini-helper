/**
 * Force any values an array
 * @function forceArray
 * @param {any} value
 * @return {Array}
 * @example
 * forceArray('1') // return ['1']
 */
export function forceArray(value?: any): any[];
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
 * @function rangeArray
 * @param {Number} init
 * @param {Number} fim
 * @param {Number} interval
 * @returns {Array<number>}
 * @example
 * rangeArray(1, 5, 1) // [1,2,3,4,5]
 */
export function rangeArray(init: number, fim: number, interval?: number): Array<number>;
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
export function medianInArray(arr: Array<number>, withZero: boolean): number;
/**
 * @function averageInArray
 * @param {Array<Number>} arr array of Numbers
 * @param {Boolean} withZero
 * @returns {Number}
 */
export function averageInArray(arr: Array<number>, withZero: boolean): number;
/**
 * @function sumArray
 * @param {Array<Number>} arrOfNumber
 * @param {boolean} checkNumber
 * @returns {Number} sum
 * @example
 * var arr = [4, 2, 8, 6];
 * sumArray(arr) // return 20
 * sumArray(['1','teste', 2], true) // return 3
 */
export function sumArray(arrOfNumber: Array<number>, checkNumber: boolean): number;
export function includesInArrayObject(arrObject: any, key: any, value: any): any;
//# sourceMappingURL=array.d.ts.map