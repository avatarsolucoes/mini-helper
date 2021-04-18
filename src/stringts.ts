export function isHex(str?: string): boolean {
  return /^[A-Fa-f0-9]+$/i.test(`${str}`)
}

/**
 * Verify if string is MAC address
 * @function isMAC
 */
export function isMAC(strMac?: string): boolean {
  if (!strMac) return false
  if (strMac.indexOf(':') >= 0 && strMac.length !== 17) return false
  if (strMac.indexOf(':') < 0 && strMac.length !== 12) return false
  const re = /^[a-fA-F0-9:]{17}|[a-fA-F0-9]{12}$/g
  return re.test(strMac)
}

interface TitelizeOptions {
  excludeCases?: string[]
  addCases?: string[]
  ignoreCases?: string[]
}
/**
 * Returns with capital letters
 * @function titleize
 * @example
 * titleize('teste de maiuscula') // Teste de Maiuscula
 * titleize('teste de do maiuscula', ['do','des',...]) // Teste De do Maiuscula
 */
export function titleize(text?: string, options: TitelizeOptions = {}): string {
  if (!text) return ''
  let cases = ['de', 'do', 'da', 'dos', 'das', 'a', 'o', 'as', 'os', 'e', 'di']
  const { excludeCases, addCases, ignoreCases } = options

  if (excludeCases) {
    cases = []
    excludeCases.forEach(c => cases.push(c))
  }
  if (addCases) addCases.forEach(c => cases.push(c))
  if (ignoreCases) cases = cases.filter(c => !ignoreCases.includes(c))

  const words = text.toLowerCase().trim().split(' ')

  return words.map(w => (cases.indexOf(w) < 0 ? `${w[0].toUpperCase()}${w.slice(1)}` : w)).join(' ')
}
