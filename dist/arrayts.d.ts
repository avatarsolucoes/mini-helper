/**
 * Forces the return of an array
 * @function forceArray
 * @example
 * forceArray('a') // ['a']
 * forceArray(['a']) // ['a']
 */
export declare function forceArray<T>(value: T | T[]): T[];
/**
 * @function rangeArray
 * @example
 * rangeArray(1, 5, 1) // [1, 2, 3, 4, 5]
 */
export declare function rangeArray(init: number, fim: number, interval?: number): number[];
/**
 * @function sumArray
 * @example
 * var arr = [4, 2, 8, 6];
 * sumArray(arr) // return 20
 * sumArray(['1','teste', 2], true) // return 3
 */
export declare function sumArray(arrOfNumber: (string | number)[], checkNumber?: boolean): number;
