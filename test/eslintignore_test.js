/**
 * Test case for eslintignore.
 * Runs with mocha.
 */
'use strict'

const eslintignore = require('../lib/eslintignore.js')
const assert = require('assert')
const coz = require('coz')

describe('eslintignore', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Eslintignore', async () => {
    const bud = eslintignore()
    bud.mkdirp = true
    bud.path = `${__dirname}/../tmp/eslintrc/.eslintignore`
    await coz.render(bud)
  })
})

/* global describe, before, after, it */
