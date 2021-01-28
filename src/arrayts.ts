/**
 * @description
 * bla bla
 * @example
 * forceArray('a') // ['a']
 *
 */
export function forceArray<T>(value: T | T[]): T[] {
  return !Array.isArray(value) ? [value] : value || []
}
