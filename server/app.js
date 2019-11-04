const express = require('express')
const path = require('path')
const compression = require('compression')
const app = express()
const api = require('./api')
const staticPath = path.join(path.resolve(), './dist')

console.log({ static: staticPath })
app.use(compression())
app.use('/', express.static(staticPath))

app.use('/api', api)

module.exports = app

// import api from './api'
// import pkg from './package.json'

// app.use(express.static('dist'))



// app.use('/api', api)

// app.get('/package.json', (req, res) => {
//   res.json(pkg)
// })

// app.listen(3000, () => console.log('Listening on port 3000!'))