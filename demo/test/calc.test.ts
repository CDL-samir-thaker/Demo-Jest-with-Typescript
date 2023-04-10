import { multiply, add } from '../src/calc'

describe('test multiply function', () => {
  it('should return 50 for multiply(10,5)',       () => {
    expect(multiply(10, 5)).toBe(50)
  })
})


describe('addition', () => {
  it('should return the sum of two numbers', () => {
    expect(add(2, 3)).toBe(5);
  });

});