/**
 * Test case for selfSigned.
 * Runs with mocha.
 */
'use strict'

const selfSigned = require('../lib/selfSigned.js')
const assert = require('assert')
const coz = require('coz')
const co = require('co')

describe('self-signed', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Self signed', () => co(function * () {
    let bud = selfSigned({})
    for (let b of bud) {
      b.path = `${__dirname}/../tmp/self-signed/${b.path}`
    }
    yield coz.render(bud)
  }))
})

/* global describe, before, after, it */
