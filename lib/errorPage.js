/**
 * Error page
 * @function errorPage
 * @param {Object} config
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const assert = require('assert')

/** @lends errorPage */
function errorPage (config) {
  const {
    title,
    texts,
    pkg,
    color = '#38A',
    icon,
    style
  } = config
  assert(pkg, 'pkg is required')
  assert(title, 'title is required')
  assert(texts, 'texts is required')
  return {
    force: true,
    mode: '444',
    data: {
      title,
      texts,
      pkg,
      color,
      icon,
      style
    },
    tmpl: _tmpl('error_page.hbs')
  }
}

module.exports = errorPage
