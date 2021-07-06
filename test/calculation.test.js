const describe = require('mocha').describe
const it = require('mocha').it
const expect = require('chai').expect
const strictEqual = require('../calculation')

describe('testing for strict equals if not strict equal then its false', () => {
  it('test for equality of string and number', () => {
    let result = strictEqual('5', 5)

    expect(result).to.equal(false)
  })
  it('test for equality of two numbers', () => {
    let result = strictEqual(1, 1)

    expect(result).to.equal(true)
  })
  it('test for equality of two strings', () => {
    let result = strictEqual('3', '3')

    expect(result).to.equal(true)
  })
})
