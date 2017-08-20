/**
 * Test case for readme.
 * Runs with mocha.
 */
'use strict'

const readme = require('../lib/readme.js')
const assert = require('assert')
const coz = require('coz')


describe('readme', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Readme', async () => {
    let bud = readme({
      pkg: {
        name: 'foo'
      },
      repo: 'foo/bar',
      sections: './*.md'
    })
    bud.mkdirp = true
    bud.path = `${__dirname}/../tmp/foo/README.md`
    await coz.render(
      bud
    )
  })
})

/* global describe, before, after, it */
