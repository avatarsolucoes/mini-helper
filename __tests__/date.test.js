import { isHex, isValidDate, timeStamp } from '../src'

describe('Test dates', () => {
  it('deveria testar datetime', async () => {
    expect(isValidDate('12/12/2012', 'DD/MM/YYYY')).toEqual(true)
    expect(isValidDate('50/12/2012', 'DD/MM/YYYY')).toEqual(false)
    expect(isValidDate('2000-12-23 23:59:59')).toEqual(true)
  })

  it('deveria retornar timestamp', async () => {
    const a1 = timeStamp()
    const a2 = timeStamp(10)
    expect(typeof a1 === 'string' && isHex(a1)).toEqual(true)
    expect(typeof a2 === 'string' && a2.length >= 12).toEqual(true)
  })
})
