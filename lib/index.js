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
  get markdowns () { return d(require('./markdowns')) },
  get nginx () { return d(require('./nginx')) },
  get readme () { return d(require('./readme')) },
  get templates () { return d(require('./templates')) },
  get test () { return d(require('./test')) }
}
