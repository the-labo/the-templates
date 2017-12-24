/**
 * Test case for mapping.
 * Runs with mocha.
 */
'use strict'

const mapping = require('../lib/mapping.js')
const assert = require('assert')
const coz = require('coz')

describe('mapping', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Mapping', async () => {
    const bud = mapping({
      requirePath: '../hoge',
      requireAs: 'hoge',
      mappings: {}
    })
    bud.mkdirp = true
    bud.path = `${__dirname}/../tmp/mapping/hoge.mapping.js`
    await coz.render(
      bud
    )
  })
})

/* global describe, before, after, it */
