/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item: any): boolean;
/**
 * Get object by omitting properties
 * @function objectWithoutProperties
 * @param {Object} obj
 * @param {Array<string>} keys
 * @returns {Object}
 * @example
 * objectWithoutProperties({ a: 1, b: 2, c: 3 }, ['b'])
 * // return { a: 1, c: 3 }
 */
export function objectWithoutProperties(obj: any, keys: Array<string>): any;
/**
 * Compares object and returns only existing keys
 * @function onlyWithProperties
 * @param {object|Array<object>} obj
 * @param {Array<string>|Object|string} keys
 * @returns {object|Array<object>}
 * @example
 * onlyWithProperties({ a: 1, b: 2, c: 3 }, ['b']) // produce { b: 2 }
 * onlyWithProperties({ a: 1, b: 2, c: 3 }, { b: 1 }) // produce { b: 2 }
 * onlyWithProperties({ a: 1, b: 2, c: 3 }, 'b') // produce { b: 2 }
 */
export function onlyWithProperties(obj: object | Array<object>, keys?: Array<string> | any | string): object | Array<object>;
/**
 * @typedef {Object} replaceObjectOptions
 * @property {Boolean} clone clone this
 * @property {Boolean} inc incremental keys
 */
/**
 * Replace object values
 * @function replaceObject
 * @param {Object} dest
 * @param {Object} src
 * @param {replaceObjectOptions} options
 * @returns {Object} object affected
 */
/**
 * Sorts array of objects
 * credits: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
 * @function compareValues
 * @param {String} key
 * @param {String} order
 * @example
 * myArray.sort(compareValues('name', 'desc'));
 */
export function compareValues(key: string, order?: string): (a: any, b: any) => number;
/**
 * Deep merge objects.
 * @param target
 * @param sources
 */
export function mergeDeep(target: any, ...sources: any[]): any;
export type replaceObjectOptions = {
    /**
     * clone this
     */
    clone: boolean;
    /**
     * incremental keys
     */
    inc: boolean;
};
