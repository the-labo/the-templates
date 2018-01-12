/**
 * Templates for the-projects
 * @module the-templates
 */
'use strict'

const _d = (m) => 'default' in m ? m['default'] : m

const api = _d(require('./api'))
const dir = _d(require('./dir'))
const lib = _d(require('./lib'))
const mapping = _d(require('./mapping'))
const markdowns = _d(require('./markdowns'))
const nginx = _d(require('./nginx'))
const pcssVars = _d(require('./pcssVars'))
const readme = _d(require('./readme'))
const selfSigned = _d(require('./selfSigned'))
const templates = _d(require('./templates'))
const test = _d(require('./test'))

module.exports = {
  api,
  dir,
  lib,
  mapping,
  markdowns,
  nginx,
  pcssVars,
  readme,
  selfSigned,
  templates,
  test,
}
