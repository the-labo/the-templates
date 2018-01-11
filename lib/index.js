/**
 * Templates for the-projects
 * @module the-templates
 */
'use strict'

const api = require('./api')
const dir = require('./dir')
const lib = require('./lib')
const mapping = require('./mapping')
const markdowns = require('./markdowns')
const nginx = require('./nginx')
const pcssVars = require('./pcssVars')
const readme = require('./readme')
const selfSigned = require('./selfSigned')
const templates = require('./templates')
const test = require('./test')

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
