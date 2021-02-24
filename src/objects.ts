import { isDefined } from './variables'
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
export function getValue<T extends { [key: string]: any }, K extends keyof T, D extends any>(
  obj: any,
  key: K,
  defaultValue?: D
): T[K] | D {
  return obj && key && obj[key] ? obj[key] || defaultValue : defaultValue
}

interface ISomeObject {
  [key: string]: any
}

/**
 * @function mirrorNotNullObject
 */
export function mirrorNotNullObject<T extends ISomeObject>(sourceModel: T, replacer: any): T {
  if (typeof sourceModel !== 'object' || typeof replacer !== 'object') return sourceModel
  const result: ISomeObject = { ...sourceModel }
  Object.keys(result).forEach(key => {
    if (key in replacer && isDefined(replacer[key])) result[key] = replacer[key]
  })
  return result as typeof sourceModel
}
