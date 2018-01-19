/**
 * Test case for vhost.
 * Runs with mocha.
 */
'use strict'

const vhost = require('../lib/vhost.js')
const coz = require('coz')
const assert = require('assert')

describe('vhost', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Vhost', async () => {
    const bud = vhost({
      domain: 'the.example.com',
      port: 8080,
    })
    bud.path = `${__dirname}/../tmp/vhost.conf`
    bud.mkdirp = true
    coz.render(bud)
  })
})

/* global describe, before, after, it */
