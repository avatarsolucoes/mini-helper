import chunk from './chunk'

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
