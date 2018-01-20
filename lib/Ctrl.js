/**
 * Ctrl
 * @function Ctrl
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const assert = require('assert')
const path = require('path')
const {pascalcase, camelcase} = require('stringcase')

/** @lends Ctrl */
function Ctrl (config) {
  const {
    cjs = false,
  } = config
  let {name} = config
  assert(name, 'name is required')
  name = name.replace(/Ctrl$/, '')

  const tmpl = _tmpl(cjs ? 'cjs_Ctrl.hbs' : 'Ctrl.hbs')
  return {
    force: false,
    mode: '644',
    path: `${name}Ctrl.js`,
    data: {
      name: path.basename(name) + 'Ctrl',
    },
    tmpl,
  }
}

module.exports = Ctrl
