/**
 * Scene
 * @function Scene
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const assert = require('assert')
const path = require('path')
const {pascalcase, camelcase, snakecase} = require('stringcase')

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
    path: `${name}Scene.js`,
    data: {
      name: path.basename(name) + 'Scene',
      scopePath: snakecase(name).replace(/_/g, '.')
    },
    tmpl,
  }
}

module.exports = Scene
