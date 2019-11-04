const app = require('./app')

// start dev server
app.listen(3000, err => {
  if (err) throw err

  console.log(`Listening at http://localhost:3000`)
})