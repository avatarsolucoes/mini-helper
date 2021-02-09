/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function objectHasKeys<T>(obj: T | Object, keys: string[]): boolean {
  const keysO = Object.keys(obj)
  for (let i = 0; i < keysO.length; i++) {
    if (keys.includes(keysO[i])) return true
  }
  return false
}

/**
 * @function getValue
 * @example
 * getValue({ a: 'test1' }, 'a') // test1
 * getValue({ a: 'test1' }, 'b') // null
 * getValue({ a: 'test1' }, 'b', 'teste2') // 'teste2'
 */
export function getValue<T, D>(obj: T, key: keyof T, defaultValue?: D): T[keyof T] | D | undefined {
  return key in obj ? obj[key] : defaultValue
}
