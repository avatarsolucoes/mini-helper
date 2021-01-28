/**
 * Arredonda numero com casas decimais
 * @function round
 * @param {Number} number
 * @param {Number} precision
 * @example
 * round(1234.5678, 1); // 1234.6
 */
export function round(number, precision = 4) {
  if (!number || (number && number === 0)) return 0
  const factor = Math.pow(10, precision)
  const tempNumber = number * factor
  const roundedTempNumber = Math.round(tempNumber)
  return roundedTempNumber / factor
}

/**
 * Arredonda numero com casas decimais
 * @function round2
 * @param {Number} number
 * @param {Number} precision
 * @example
 * round2(1234.5678, 1); // 1234.6
 */
export function round2(number, precision = 4) {
  if (!number || (number && number === 0)) return 0
  if (typeof number === 'string') return parseFloat(number).toFixed(precision)
  if (typeof number === 'number') return number.toFixed(precision)
  return 0
}

export function round3(number, precision = 4) {
  return +`${Math.round(`${number}e+${precision}`)}e-${precision}`
}
