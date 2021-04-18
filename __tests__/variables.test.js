import {
  isModuleResolve,
  notNull,
  intToHex,
  intToHex2,
  tryInteger,
  hexToAlphaNumeric,
  hex2Char,
  hexToASC,
  ASCToHex
} from '../src'

describe('Test variable functions', () => {
  it('deveria testar isModuleResolve', async () => {
    expect(isModuleResolve('path')).toEqual(true)
    expect(isModuleResolve('abcdef')).toEqual(false)
  })

  it('deveria resultar algo', async () => {
    expect(notNull(null)).toEqual(true)
  })

  it('deveria resultar hexadecimal', async () => {
    expect(intToHex(65)).toEqual('41')
    expect(intToHex({})).toEqual('00')
    expect(intToHex2(65)).toEqual('41')
    expect(intToHex2({})).toEqual('00')
  })

  it('deveria resultar inteiro', async () => {
    expect(tryInteger(65)).toEqual(65)
    expect(tryInteger('65')).toEqual(65)
    expect(tryInteger(1.3333)).toEqual(1)
  })

  it('deveria resultar ascii', async () => {
    expect(hexToAlphaNumeric('414243')).toEqual('ABC')
    expect(hexToAlphaNumeric('412643', true)).toEqual('A C')
  })

  it('deveria resultar hex2Char', async () => {
    expect(hex2Char('414243')).toEqual('ABC')
    expect(hex2Char('412643', true)).toEqual('A&C')
  })

  it('deveria resultar hex2Char', async () => {
    const a = Buffer.from([0x41, 0x42, 0x43])
    const b = Buffer.from('ABC')
    const c = Buffer.from([65, 66, 67])
    expect(hexToASC(a)).toEqual('ABC')
    expect(hexToASC(b)).toEqual('ABC')
    expect(hexToASC(c)).toEqual('ABC')
    expect(hexToASC(['41', '42', '43'])).toEqual('ABC')
    expect(hexToASC('414243')).toEqual('ABC')
    expect(hexToASC({})).toEqual('')
  })

  it('deveria resultar hex2Char', async () => {
    expect(ASCToHex('AB')).toEqual('4142')
    // expect(ASCToHex({})).toEqual('')
  })
})
