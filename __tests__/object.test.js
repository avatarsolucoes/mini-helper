import { getValue, mergeDeep, objectHasKeys } from '../src'

describe('Test objects', function () {
  it('should get a value of a object', () => {
    const obj = {
      test: 'test'
    }
    expect(getValue(obj, 'test')).toBe('test')
    expect(getValue(obj, 'teste', 'testado')).toBe('testado')
  })

  it('deveria testar objectHasKeys', () => {
    const obj = { a: 1, b: 2 }
    expect(objectHasKeys(obj, ['b', 'c'])).toEqual(true)
    expect(objectHasKeys(obj, ['c'])).toEqual(false)
  })

  it('should be merged object', () => {
    const expected = { a: 'test-a', b: 'test-b' }
    const a = {
      a: 'test-a',
      c: {
        ac: true
      }
    }
    expect(mergeDeep(a, { b: 'test-b' })).toEqual(expect.objectContaining(expected))

    expected.c = { ac: true, bc: true }
    expect(mergeDeep(a, { b: 'test-b', c: { bc: true } })).toEqual(
      expect.objectContaining(expected)
    )
  })
})
