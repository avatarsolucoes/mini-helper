/**
 * Check if there is ownership in an object
 * @function objectHasKeys
 * @param {Object} obj
 * @param {Array<String>} keys
 * @returns {boolean}
 * @example
 * objectHasKeys({ a: 1, b: 2}, ['b','c']) // true match 'b'
 * objectHasKeys({ a: 1, b: 2}, ['c']) // false
 */
export function objectHasKeys(obj: Object, keys: Array<string>): boolean;
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
export function objectWithoutProperties(obj: Object, keys: Array<string>): Object;
/**
 * Compares object and returns only existing keys
 * @function onlyWithProperties
 * @param {Object} obj
 * @param {Array<string>|Object|String} keys
 * @returns {Object}
 * @example
 * onlyWithProperties({ a: 1, b: 2, c: 3 }, ['b']) // produce { b: 2 }
 * onlyWithProperties({ a: 1, b: 2, c: 3 }, { b: 1 }) // produce { b: 2 }
 * onlyWithProperties({ a: 1, b: 2, c: 3 }, 'b') // produce { b: 2 }
 */
export function onlyWithProperties(obj: Object, keys?: Array<string> | Object | string): Object;
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
//# sourceMappingURL=object.d.ts.map