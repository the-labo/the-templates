/**
 * Hook
 * @function Hook
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const assert = require('assert')
const path = require('path')
const {pascalcase, camelcase} = require('stringcase')

/** @lends Hook */
function Hook (config) {
  const {
    cjs = false,
  } = config
  let {name} = config
  assert(name, 'name is required')
  name = name.replace(/Hook$/, '')

  const tmpl = _tmpl(cjs ? 'cjs_Hook.hbs' : 'Hook.hbs')
  return {
    force: false,
    mode: '644',
    path: `${name}Hook.js`,
    data: {
      name: path.basename(name) + 'Hook',
    },
    tmpl,
  }
}

module.exports = Hook
