/**
 * Test case for test.
 * Runs with mocha.
 */
'use strict'

const test = require('../lib/test.js')
const assert = require('assert')
const coz = require('coz')
const co = require('co')

describe('test', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Test', () => co(function * () {
    let bud = test({
      src: `${__dirname}/../misc/mocks/*.jsx`,
      dest: `${__dirname}/../tmp/foo/test`
    })
    yield coz.render(
      bud
    )
  }))
})

/* global describe, before, after, it */
