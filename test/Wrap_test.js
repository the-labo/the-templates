/**
 * Test case for wrap.
 * Runs with mocha.
 */
'use strict'

const wrap = require('../lib/Wrap.js')
const assert = require('assert')
const coz = require('coz')

describe('wrap', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Wrap', async () => {
    const bud = wrap({name: 'withHoge', cjs: true})
    bud.path = `${__dirname}/../tmp/withHoge.js`
    bud.mkdirp = true
    coz.render(bud)
  })
})

/* global describe, before, after, it */
