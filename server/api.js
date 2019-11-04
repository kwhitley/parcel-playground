const express = require('express')

const app = express()

app.get('/foo', (req, res) => res.json({ bar: 'baz', age: 13, loaded: true }))

module.exports = app