/**
 * @function timeRest
 * @param {Number} inMinutes integer
 */
export function timeRest(inMinutes: number): string;
export function getUpTime(init: any): string | 0;
/**
 * @function diffExpires
 * @param {number} expires
 * @param {number} dateNow
 * @returns {number} minutes
 */
export function diffExpires(expires: number, dateNow?: number): number;
/**
 * @function dateToStrTimeZone
 * @param {String|Date} date
 * @param {String} to date format
 * @param {String} timezone
 * @returns {String} data formated (to)
 * @example
 * dateToStrTimeZone(new Date(), 'YYYY-MM-DD HH:mm:ss', 'America/Fortaleza');
 */
export function dateToStrTimeZone(date: string | Date, to?: string, timezone?: string): string;
/**
 *
 * @param {String} strdate
 * @param {String} from date format
 * @param {String} to date format
 * @returns {String} data formated (to)
 * @example
 * strDateFromTo('01/12/19', 'DD/MM/YY', 'YYY-MM-DD')
 */
export function strDateFromTo(strdate: string, from: string, to?: string): string;
/**
 *
 * @param {*} date
 * @param {*} format
 */
export function rangedMonth(date: any, format: any): {
    start: any;
    end: any;
};
/**
 * @function extractOfDateTime
 * @param {Date|String} datetime - string YYYY-MM-DD HH:mm:ss
 * @param {String} format date format ex: 'YYYY-MM-DD HH:mm:ss'
 * @param {String} timezone
 */
export function extractOfDateTime(datetime: Date | string, format: string, timezone: string): {
    date: string;
    time: string;
};
