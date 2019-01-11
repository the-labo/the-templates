/**
 * Stateless
 * @function Stateless
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const assert = require('assert')
const path = require('path')
const { pascalcase, camelcase } = require('stringcase')

/** @lends Stateless */
function Stateless (config) {
  const {
    name,
  } = config
  assert(name, 'name is required')

  const tmpl = _tmpl('Stateless.hbs')
  return {
    force: false,
    mode: '644',
    mkdirp: true,
    path: `${name}.jsx`,
    data: {
      name: path.basename(name) + '',
      contextPath: path.relative(name, 'context'),
    },
    tmpl,
  }
}

module.exports = Stateless
