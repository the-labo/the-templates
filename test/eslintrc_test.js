/**
 * Test case for eslintrc.
 * Runs with mocha.
 */
'use strict'

const eslintrc = require('../lib/eslintrc.js')
const assert = require('assert')
const coz = require('coz')

describe('eslintrc', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Eslintrc', async () => {
    const bud = eslintrc()
    bud.mkdirp = true
    bud.path = `${__dirname}/../tmp/eslintrc/.eslintrc.yml`
    await coz.render(bud)
  })
})

/* global describe, before, after, it */
