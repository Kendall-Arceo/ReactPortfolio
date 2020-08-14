var express = require('express')
var path = require('path')
var serveStatic = require('serve-static')

var app = express()
app.use(serveStatic(path.join(__dirname, 'dist')))

app.get('/', function (req, res) {
    res.render('App', {});
});
var port = process.env.PORT || 3000
app.listen(port)
console.log('server started ' + port)