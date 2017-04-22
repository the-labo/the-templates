/**
 * Define coz bud for readme
 * @function readme
 * @returns {Object}
 */
'use strict'

const { readmeMdBud } = require('ape-tmpl')

/** @lends readme */
function readme (config) {
  return readmeMdBud(config)
}

module.exports = readme
