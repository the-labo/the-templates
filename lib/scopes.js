/**
 * @function scopes
 */
'use strict'

const _tmpl = require('./_tmpl')
const objnest = require('objnest')
const aglob = require('aglob')
const path = require('path')
const {camelcase} = require('stringcase')

const handleRestConfig = (rest) => {
  const restKeys = Object.keys(rest)
  if (restKeys.length > 0) {
    console.warn(`[the-templates][scopes] Unknown configs: ${restKeys}`)
  }
}
const withoutExt = (filename) => path.join(
  path.dirname(filename), path.basename(filename, path.extname(filename))
)
const compareByLength = (a, b) => a.length - b.length

/** @lends scopes */
function scopes (config) {
  const {
    dirname,
    pattern = '**/*.json',
    ...rest
  } = config
  handleRestConfig(rest)
  const filenames = aglob.sync(pattern, {cwd: dirname})
  const modules = Object.assign({},
    ...filenames.map((filename) => ({
      [withoutExt(filename).replace(/\//g, '.')]: {
        path: './' + filename,
        varName: camelcase(withoutExt(filename).replace(/\//g, '_')) + '_',
        namespace: false,
      },
    }))
  )

  for (const key of Object.keys(modules).sort(compareByLength)) {
    const keypaths = key.split(/\./g)
    for (let i = 0; i < keypaths.length - 1; i++) {
      const keypath = keypaths.slice(0, i + 1).join('.')
      if (!modules[keypath]) {
        modules[keypath] = {namespace: true}
      }
    }
  }
  return {
    force: true,
    mode: '444',
    tmpl: _tmpl('scopes.hbs'),
    path: `${dirname}/index.js`,
    data: {
      modules: Object.keys(modules).sort((a, b) => a.localeCompare(b)).map((k) => ({
        name: k,
        ...modules[k]
      }))
    }
  }

}

module.exports = scopes
