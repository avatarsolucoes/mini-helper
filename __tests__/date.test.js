import { isValidDate } from '../src'

describe('Test dates', () => {
  it('deveria testar datetime', async () => {
    expect(isValidDate('12/12/2012', 'DD/MM/YYYY')).toEqual(true)
    expect(isValidDate('50/12/2012', 'DD/MM/YYYY')).toEqual(false)
    expect(isValidDate('2000-12-23 23:59:59')).toEqual(true)
  })
})
