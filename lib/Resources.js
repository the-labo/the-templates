/**
 * @function Resources
 */
'use strict'

const _tmpl = require('./_tmpl')

/** @lends Resources */
function Resources (config) {
  const {
    ResourceMapping,
    pathPrefix = 'server/db/resources/',
    pathSuffix = 'Resource.js',
  } = config
  return {
    force: true,
    mode: '444',
    tmpl: _tmpl('Resources.hbs'),
    data: {
      Resources: ResourceMapping,
      pathPrefix,
      pathSuffix,
    }
  }
}

module.exports = Resources