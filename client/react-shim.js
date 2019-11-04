const preact = require('preact')
const hooks = require('preact/hooks')

module.exports = {
  ...preact,
  ...hooks,
}

console.log('react-shim loaded...')