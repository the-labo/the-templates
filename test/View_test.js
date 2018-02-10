/**
 * Test case for view.
 * Runs with mocha.
 */
'use strict'

const view = require('../lib/View.js')
const assert = require('assert')
const coz = require('coz')

describe('view', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('View', async () => {
    const bud = view({name: 'HogeView'})
    bud.path = `${__dirname}/../tmp/HogeView.jsx`
    bud.mkdirp = true
    coz.render(bud)
  })
})

/* global describe, before, after, it */
