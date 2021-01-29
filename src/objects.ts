/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function objectHasKeys<T>(obj: T | Object, keys: string[]): boolean {
  const keysO = Object.keys(obj)
  for (let i = 0; i < keysO.length; i++) {
    if (!keys.includes(keysO[i])) return true
  }
  return false
}

export const getValue = (obj: any, key: string, defaultValue = ''): unknown =>
  obj && obj[key] ? obj[key] || defaultValue : defaultValue
