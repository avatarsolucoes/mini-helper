import {
  getRandomArbitrary,
  getRandomInt,
  getRamdomStr,
  getRamdomHex,
  hashPassword,
  hashMD5,
  isMD5,
  getInRamdom,
  generateIdPass
} from '../src'

describe('Test ramdom', () => {
  it('deveria voltar range de numero aleatorio 1', done => {
    let test = getRandomArbitrary(10, 12)
    expect(test).toBeGreaterThanOrEqual(10)
    expect(test).toBeLessThanOrEqual(12)
    test = getRandomArbitrary(1, 1000)
    expect(test).toBeGreaterThanOrEqual(1)
    expect(test).toBeLessThanOrEqual(1000)
    done()
  })

  it('deveria voltar range de numero aleatorio 2', done => {
    let test = getRandomInt(10, 12)
    expect(test).toBeGreaterThanOrEqual(10)
    expect(test).toBeLessThanOrEqual(12)
    test = getRandomInt(1, 1000)
    expect(test).toBeGreaterThanOrEqual(1)
    expect(test).toBeLessThanOrEqual(1000)
    done()
  })

  it('deveria string aleatoria', done => {
    const str = getRamdomStr(10)
    const test = /^[0-9,A-Z]{10}$/.test(str)
    expect(test).toEqual(true)
    done()
  })

  it('deveria retornar string hexadecimal aleatoria', done => {
    const str = getRamdomHex()
    const test = /^[a-f0-9]{32}$/g
    expect(test.test(str)).toEqual(true)
    done()
  })

  it('deveria retornar string hexadecimal aleatoria', done => {
    const str = hashPassword('123456', 'secret')
    const test = /^[a-f0-9]{32}$/g
    expect(test.test(str)).toEqual(true)
    done()
  })

  it('deveria retornar string hexadecimal aleatoria', done => {
    const str = hashMD5('123456')
    expect(isMD5(str)).toEqual(true)

    const pass = generateIdPass('123456', 'secret')
    expect(isMD5(pass)).toEqual(true)
    done()
  })

  it('deveria retornar string', done => {
    const obj = { test: '123', test1: 'abc', test2: 'cba' }

    const str1 = getInRamdom(obj)
    const t1 = /[a-z0-9]{3}$/g
    expect(t1.test(str1)).toEqual(true)

    const t2 = /[a-z0-9]{3}$/g
    const str2 = getInRamdom([obj, { foo: 'bar' }])
    expect(t2.test(str2)).toEqual(true)

    const t3 = /[a-z0-9]{3}$/g
    const str3 = getInRamdom(() => obj)
    expect(t3.test(str3)).toEqual(true)

    const str4 = getInRamdom('123456ABCD')
    expect(typeof str4 === 'string').toEqual(true)
    done()
  })
})
