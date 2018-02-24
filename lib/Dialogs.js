/**
 * Define coz bud for Dialogs
 * @function Dialogs
 * @returns {Object}
 */
'use strict'

const _tmpl = require('./_tmpl')
const {ok} = require('assert')
const path = require('path')
const aglob = require('aglob')

/** @lends Dialogs */
function Dialogs (config) {
  let {
    dirname,
    pattern = [
      `**/*Dialog.jsx`,
    ],
    from = '../stateful',
  } = config

  const components = aglob.sync(pattern, {cwd: dirname})
    .map((filename) => path.basename(filename, '.jsx'))
    .sort()

  ok(!!dirname, 'config.dirname is required')
  if (components.length === 0) {
    console.warn(`[the-template] No dialogs found in ${dirname}`)
  }
  return {
    force: true,
    mode: '444',
    tmpl: _tmpl('Dialogs.hbs'),
    data: {
      from,
      components
    }
  }
}

module.exports = Dialogs
