/**
 * Test case for nginx.
 * Runs with mocha.
 */
'use strict'

const nginx = require('../lib/nginx.js')
const assert = require('assert')
const coz = require('coz')

describe('nginx', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Nginx', async () => {
    let bud = nginx({})

    bud.mkdirp = true
    bud.path = `${__dirname}/../tmp/foo/nginx.vhost`
    await coz.render(bud)
  })
})

/* global describe, before, after, it */
