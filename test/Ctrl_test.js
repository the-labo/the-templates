/**
 * Test case for ctrl.
 * Runs with mocha.
 */
'use strict'

const ctrl = require('../lib/Ctrl.js')
const assert = require('assert')
const coz = require('coz')

describe('ctrl', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Ctrl', async () => {
    const bud = ctrl({name: 'AppCtrl', cjs: true})
    bud.path = `${__dirname}/../tmp/AppCtrl.js`
    bud.mkdirp = true
    coz.render(bud)
  })
})

/* global describe, before, after, it */
