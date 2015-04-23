var express = require('express')
  , fs = require('fs')
  , localtunnel = require('localtunnel')
  , app = express()

var tunnel = localtunnel(process.env.ZUUL_PORT, function (err, tunnel) {
  if (err)
    throw err
})

app.use(require('morgan')('dev'))
app.use(require('body-parser').urlencoded({extended:false}))
app.use(require('body-parser').json())

app.get('/nanoajax.min.js', function (req, res) {
  fs.createReadStream(__dirname + '/../nanoajax.min.js', {encoding:'utf8'})
    .pipe(res)
})

app.get('/get', function (req, res) {
  res.send('OK')
})

app.post('/post', function (req, res) {
  if (req.body.arg === 'value' && req.body.foo === 'bar')
    res.send('OK')
  else
    res.status(400).send('Bad Request: ' + JSON.stringify(req.body))
})

app.put('/put', function (req, res) {
  res.send(Object.keys(req.body).length > 0 ? 'OK' : 'NO body?')
})

app.get('/error', function (req, res) {
  res.status(500).send('Error')
})

app.get('/cors-url', function (req, res) {
  res.send(tunnel.url)
})

app.get('/cors', function (req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.send('COORS')
})

app.get('/header', function (req, res) {
  res.send(req.headers['x-custom'])
})

app.listen(process.env.ZUUL_PORT)