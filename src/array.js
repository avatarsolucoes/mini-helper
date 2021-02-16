import chunk from 'chunk'
import { forceArray } from './arrayts'

// /**
//  * Force any values an array
//  * @function forceArray
//  * @param {any} value
//  * @return {Array}
//  * @example
//  * forceArray('1') // return ['1']
//  */
// export function forceArray(value = []) {
//   return !Array.isArray(value) ? [value] : value
// }

/**
 * If array return first item
 * @function unArray
 * @param {Array} arr
 */
export function unArray(arr) {
  if (!Array.isArray(arr)) return arr
  if (arr.length > 0) return arr[0]
  return false
}

/**
 * @function range
 * @param {Number} begin
 * @param {Number} end
 * @param {Number} interval
 */
export function* range(begin, end, interval = 1) {
  for (let i = begin; i <= end; i += interval) {
    yield i
  }
}

/**
 * @function rangeArray
 * @param {Number} init
 * @param {Number} fim
 * @param {Number} interval
 * @returns {Array<number>}
 * @example
 * rangeArray(1, 5, 1) // [1,2,3,4,5]
 */
export function rangeArray(init, fim, interval = 1) {
  return Array.from(range(init, fim, interval))
}

/**
 * Convert Buffer in Array
 * @param {Buffer|ArrayBuffer|string} buf dataBuffer
 * @returns {Array} chunked
 * @example
 * buffToArray('A03B18') // return ['A0','3B','18']
 */
export function buffToArray(buf, size = 2) {
  if (!buf) return []
  if (buf instanceof Buffer) {
    return chunk(buf.toString('hex'), size)
  }
  if (Array.isArray(buf)) return buf
  return chunk(buf.replace(/ /g, ''), size)
}

/**
 * @function medianInArray
 * @param {Array<Number>} arr array of Numbers
 * @param {Boolean} withZero
 * @returns {Number}
 */
export function medianInArray(arr, withZero = false) {
  if (!Array.isArray(arr)) return typeof arr === 'number' ? arr : 0
  const array = withZero ? arr.map(a => a || 0) : arr.filter(a => !!(a && a > 0))
  array.sort((a, b) => a - b)
  const lowMid = Math.floor((array.length - 1) / 2)
  const highMid = Math.ceil((array.length - 1) / 2)
  return (array[lowMid] + array[highMid]) / 2
}

/**
 * @function averageInArray
 * @param {Array<Number>} arr array of Numbers
 * @param {Boolean} withZero
 * @returns {Number}
 */
export function averageInArray(arr, withZero) {
  if (!Array.isArray(arr)) return typeof arr === 'number' ? arr : 0
  const array = withZero ? arr.map(a => a || 0) : arr.filter(f => f)
  return array.reduce((a, b) => a + b, 0) / array.length
}

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
export function sumArray(arrOfNumber, checkNumber) {
  const sum = (t, n) => {
    if (n && typeof n === 'number' && n !== 0) return t + n
    if (n && typeof n === 'string' && checkNumber) return t + (parseInt(n, 10) || 0)
    return t
  }
  return forceArray(arrOfNumber).reduce(sum, 0)
}
