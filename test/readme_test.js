/**
 * Test case for readme.
 * Runs with mocha.
 */
'use strict'

const readme = require('../lib/readme.js')
const assert = require('assert')
const coz = require('coz')
const co = require('co')

describe('readme', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Readme', () => co(function * () {
    let bud = readme({
      pkg: {
        name: 'foo'
      },
      repo: 'foo/bar',
      sections: './*.md'
    })
    bud.mkdirp = true
    bud.path = `${__dirname}/../tmp/foo/README.md`
    yield coz.render(
      bud
    )
  }))
})

/* global describe, before, after, it */
