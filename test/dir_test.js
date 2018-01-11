/**
 * Test case for dir.
 * Runs with mocha.
 */
'use strict'

const dir = require('../lib/dir.js')
const assert = require('assert')
const coz = require('coz')

describe('dir', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Dir', async () => {
    const bud = dir({
      dirname: __dirname,
      name: 'foo',
      description: 'hoge',
      default: 'dddd'
    })
    bud.path = `${__dirname}/../tmp/foo/bar/baz.mjs`
    bud.mkdirp = true
    await coz.render(bud)
  })
})

/* global describe, before, after, it */
