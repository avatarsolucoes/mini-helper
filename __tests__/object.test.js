import { getValue } from '../src'

describe('Test objects', function () {
  it('should get a value of a object', () => {
    const obj = {
      test: 'test'
    }
    expect(getValue(obj, 'test')).toBe('test')
    expect(getValue(obj, 'teste')).toBe(null)
    expect(getValue(obj, 'teste', 'testado')).toBe('testado')
  })
})
