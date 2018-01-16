/**
 * Test case for scene.
 * Runs with mocha.
 */
'use strict'

const scene = require('../lib/Scene.js')
const assert = require('assert')
const coz = require('coz')

describe('scene', function () {
  this.timeout(3000)

  before(async () => {

  })

  after(async () => {

  })

  it('Scene', async () => {
    const bud = scene({name: 'hoge', cjs: true})
    bud.path = `${__dirname}/../tmp/HogeScene.js`
    bud.mkdirp = true
    coz.render(bud)
  })
})

/* global describe, before, after, it */
