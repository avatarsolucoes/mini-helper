export declare function objectHasKeys<T>(obj: T | Object, keys: string[]): boolean;
/**
 * @function getValue
 * @example
 * getValue({ a: 'test1' }, 'a') // test1
 * getValue({ a: 'test1' }, 'b') // null
 * getValue({ a: 'test1' }, 'b', 'teste2') // 'teste2'
 */
export declare function getValue<T extends {
    [key: string]: any;
}, K extends keyof T, D extends any>(obj: any, key: K, defaultValue?: D): T[K] | D;
interface ISomeObject {
    [key: string]: any;
}
/**
 * @function mirrorNotNullObject
 */
export declare function mirrorNotNullObject<T extends ISomeObject>(sourceModel: T, replacer: any): T;
export {};
