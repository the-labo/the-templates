/**
 * Scene
 * @function Scene
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const assert = require('assert')

/** @lends Scene */
function Scene (config) {
  const {
    name,
    cjs = false,
  } = config
  assert(name, 'name is required')

  const tmpl = _tmpl(cjs ? 'cjs_Scene.hbs' : 'Scene.hbs')
  return {
    force: false,
    mode: '644',
    data: {
      name,
    },
    tmpl,
  }
}

module.exports = Scene
