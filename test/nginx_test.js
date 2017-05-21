/**
 * Test case for nginx.
 * Runs with mocha.
 */
'use strict'

const nginx = require('../lib/nginx.js')
const assert = require('assert')
const coz = require('coz')
const co = require('co')

describe('nginx', function () {
  this.timeout(3000)

  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Nginx', () => co(function * () {
    let bud = nginx({})

    bud.mkdirp = true
    bud.path = `${__dirname}/../tmp/foo/nginx.vhost`
    yield coz.render(bud)
  }))
})

/* global describe, before, after, it */
