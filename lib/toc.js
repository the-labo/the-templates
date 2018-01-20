/**
 * @function toc
 */
'use strict'

const generator = require('markdown-toc')
const fs = require('fs')

/** @lends toc */
function toc (config) {
  const {
    src,
    exclude = [/Table of Contents/],
  } = config

  return {
    force: true,
    mode: '444',
    data: {
      src: fs.readFileSync(src).toString()
    },
    tmpl (data) {
      const {src} = data
      return generator(src, {
        filter (line) {
          const rejectPatterns = exclude
          for (const pattern of rejectPatterns) {
            if (pattern.test(line)) {
              return false
            }
          }
          return true
        }
      }).content.toString()
    }
  }
}

module.exports = toc