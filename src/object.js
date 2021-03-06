// import _ from 'lodash'
import { forceArray } from './arrayts'

/**
 * Simple object check.
 * @param item
 * @returns {boolean}
 */
export function isObject(item) {
  return item && typeof item === 'object' && !Array.isArray(item) && !(item instanceof Date)
}

// /**
//  * Check if there is ownership in an object
//  * @function objectHasKeys
//  * @param {Object} obj
//  * @param {Array<String>} keys
//  * @returns {boolean}
//  * @example
//  * objectHasKeys({ a: 1, b: 2}, ['b','c']) // true match 'b'
//  * objectHasKeys({ a: 1, b: 2}, ['c']) // false
//  */
// export function objectHasKeys(obj, keys) {
//   const keysO = Object.keys(obj)
//   const k = forceArray(keys)
//   for (let i = 0; i < keysO.length; i++) {
//     if (k.includes(keysO[i])) {
//       return true
//     }
//   }
//   return false
// }

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
export function objectWithoutProperties(obj, keys) {
  const target = {}
  const keysO = Object.keys(obj)
  for (let i = 0; i < keysO.length; i++) {
    const k = keysO[i]
    if (!keys.includes(k)) target[k] = obj[k]
  }
  return target
}

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
export function onlyWithProperties(obj, keys = []) {
  if (Array.isArray(obj)) return obj.map(o => onlyWithProperties(o, keys))
  if (typeof obj !== 'object') return {}

  const target = {}
  const keysCompare = []

  if (Array.isArray(keys)) keys.forEach(k => keysCompare.push(k))
  else if (typeof keys === 'object') Object.keys(keys).forEach(k => keysCompare.push(k))
  else forceArray(keys).forEach(k => keysCompare.push(k))

  Object.keys(obj).forEach(k => {
    if (keysCompare.includes(k)) target[k] = obj[k]
  })

  return target
}

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
// export function replaceObject(dest, src, options) {
//   if (!dest || !src) return false
//   const funcCopy = value => (options && options.clone ? _.cloneDeep(value) : value)

//   Object.keys(src).forEach(key => {
//     if ((options && options.inc) || key in dest) {
//       // eslint-disable-next-line no-param-reassign
//       dest[key] = funcCopy(src[key])
//     }
//   })

//   return dest
// }

/**
 * Sorts array of objects
 * credits: https://www.sitepoint.com/sort-an-array-of-objects-in-javascript/
 * @function compareValues
 * @param {String} key
 * @param {String} order
 * @example
 * myArray.sort(compareValues('name', 'desc'));
 */
export function compareValues(key, order = 'asc') {
  return function innerSort(a, b) {
    if (!(key in a) || !(key in b)) return 0
    const varA = typeof a[key] === 'string' ? a[key].toUpperCase() : a[key]
    const varB = typeof b[key] === 'string' ? b[key].toUpperCase() : b[key]

    let comparison = 0
    if (varA > varB) {
      comparison = 1
    } else if (varA < varB) {
      comparison = -1
    }
    return order === 'desc' ? comparison * -1 : comparison
  }
}

/**
 * Deep merge objects.
 * @param target
 * @param sources
 */
export function mergeDeep(target, ...sources) {
  if (!sources.length) return target
  const source = sources.shift()

  if (isObject(target) && isObject(source)) {
    const keys = Object.keys(source)
    for (let i = 0; i < keys.length; i++) {
      const key = keys[i]
      if (isObject(source[key])) {
        if (!target[key]) Object.assign(target, { [key]: {} })
        mergeDeep(target[key], source[key])
      } else {
        Object.assign(target, { [key]: source[key] })
      }
    }
  }
  return mergeDeep(target, ...sources)
}
