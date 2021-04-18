/**
 * Arredonda numero com casas decimais
 * @function round
 * @example
 * round(1234.5678, 1); // 1234.6
 */
export declare function round(number: number, precision?: number): number;
/**
 * Arredonda numero com casas decimais
 * @function roundStr
 * @example
 * roundStr(1234.5678, 1); // 1234.6
 * roundStr('1234.5678', 1); // 1234.6
 */
export declare function roundStr(number: number | string, precision?: number): string;
/**
 * @deprecated use roundStr
 * @function round2
 * @example
 * round2(1234.5678, 1); // 1234.6
 */
export declare const round2: typeof roundStr;
