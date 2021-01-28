/**
 * Forces the return of an array
 * @function forceArray
 * @example
 * forceArray('a') // ['a']
 * forceArray(['a']) // ['a']
 */
export function forceArray<T>(value: T | T[]): T[] {
  return !Array.isArray(value) ? [value] : value || []
}
