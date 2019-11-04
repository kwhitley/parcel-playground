const app = require('./app')

// dev-server.js
const path = require('path')
const Bundler = require('parcel-bundler')

// use parcel for client changes
const entry = path.resolve('client/index.html')
const bundle = new Bundler(entry)

app.use(bundle.middleware())

// start dev server
app.listen(3000, err => {
  if (err) throw err

  console.log(`Listening at http://localhost:3000`)
})