/**
 * View
 * @function View
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const assert = require('assert')
const path = require('path')
const { pascalcase, camelcase, snakecase } = require('stringcase')

/** @lends View */
function View (config) {
  const {
    name,
  } = config
  assert(name, 'name is required')

  const tmpl = _tmpl('View.hbs')
  return {
    force: false,
    mode: '644',
    path: `${name}.jsx`,
    mkdirp: true,
    data: {
      name: path.basename(name),
    },
    tmpl,
  }
}

module.exports = View
