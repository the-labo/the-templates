/**
 * Story
 * @function Story
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const assert = require('assert')
const path = require('path')

/** @lends Story */
function Story (config) {
  const {
    cjs = false,
  } = config
  let {name} = config
  assert(name, 'name is required')
  name = name.replace(/Story$/, '')

  const tmpl = _tmpl(cjs ? 'cjs_Story.hbs' : 'Story.hbs')
  return {
    force: false,
    mode: '644',
    path: `${name}Story.js`,
    data: {
      name: path.basename(name).replace(/^[\d.]*/, '') + 'Story',
    },
    tmpl,
  }
}

module.exports = Story
