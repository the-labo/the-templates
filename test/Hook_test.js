/**
 * Test case for hook.
 * Runs with mocha.
 */
'use strict'

const hook = require('../lib/Hook.js')
const assert = require('assert')
const coz = require('coz')

describe('hook', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Hook', async () => {
    const bud = hook({name: 'HogeHook', cjs: true})
    bud.path = `${__dirname}/../tmp/HogeHook.js`
    bud.mkdirp = true
    coz.render(bud)
  })
})

/* global describe, before, after, it */
