export declare function objectHasKeys<T>(obj: T | Object, keys: string[]): boolean;
/**
 * @function getValue
 * @example
 * getValue({ a: 'test1' }, 'a') // test1
 * getValue({ a: 'test1' }, 'b') // null
 * getValue({ a: 'test1' }, 'b', 'teste2') // 'teste2'
 */
export declare const getValue: (obj: any, key: string, defaultValue?: null) => any | null;
//# sourceMappingURL=objects.d.ts.map