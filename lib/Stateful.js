/**
 * Stateful
 * @function Stateful
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const assert = require('assert')
const path = require('path')
const {pascalcase, camelcase} = require('stringcase')

/** @lends Stateful */
function Stateful (config) {
  const {
    name,
  } = config
  assert(name, 'name is required')

  const tmpl = _tmpl('Stateful.hbs')
  return {
    force: false,
    mode: '644',
    mkdirp: true,
    path: `${name}.jsx`,
    data: {
      name: path.basename(name) + '',
    },
    tmpl,
  }
}

module.exports = Stateful
