/**
 * Test case for test.
 * Runs with mocha.
 */
'use strict'

const test = require('../lib/test.js')
const assert = require('assert')
const coz = require('coz')


describe('test', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Test', async () => {
    let bud = test({
      src: `${__dirname}/../misc/mocks/*.jsx`,
      dest: `${__dirname}/../tmp/foo/test`
    })
    await coz.render(
      bud
    )
  })

  it('TestDir', async () => {
    let bud = test.dir({
      src: `${__dirname}/../misc/mocks`,
      dest: `${__dirname}/../tmp/foo/test/`,
      node: true
    })
    await coz.render(
      bud
    )
  })
})

/* global describe, before, after, it */
