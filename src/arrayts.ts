import { range } from './array'
/**
 * Forces the return of an array
 * @function forceArray
 * @example
 * forceArray('a') // ['a']
 * forceArray(['a']) // ['a']
 */
export function forceArray<T>(value: T | T[]): T[] {
  return !Array.isArray(value) ? [value] : value
}

/**
 * @function rangeArray
 * @example
 * rangeArray(1, 5, 1) // [1, 2, 3, 4, 5]
 */
export function rangeArray(init: number, fim: number, interval = 1): number[] {
  return Array.from(range(init, fim, interval))
}
/**
 * @function sumArray
 * @example
 * var arr = [4, 2, 8, 6];
 * sumArray(arr) // return 20
 * sumArray(['1','teste', 2], true) // return 3
 */
export function sumArray(arrOfNumber: (string | number)[], checkNumber = false): number {
  const sum = (t: number, n: number | string): number => {
    if (n && typeof n === 'number' && n !== 0) return t + n
    if (n && typeof n === 'string' && checkNumber) return t + (parseInt(n, 10) || 0)
    return t
  }
  return forceArray(arrOfNumber).reduce(sum, 0) as number
}
