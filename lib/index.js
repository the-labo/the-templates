/**
 * Templates for the-projects
 * @module the-templates
 */

'use strict'

let d = (module) => module && module.default || module

module.exports = {
  get api () { return d(require('./api')) },
  get dir () { return d(require('./dir')) },
  get lib () { return d(require('./lib')) },
  get nginx () { return d(require('./nginx')) },
  get readme () { return d(require('./readme')) },
  get test () { return d(require('./test')) }
}
