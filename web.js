var express = require('express')
var favicon = require('serve-favicon')
var queryString = require('querystring')
var findbook = require('./searchbook')
var mapping = require('./mapping')

var app = express();
app.set('views',__dirname + '/views')
app.engine('html',require('hogan-express'))
app.set('view engine','html')
app.use(favicon(__dirname + '/public/favicon.ico'))
app.use('/',mapping)
app.use('/static',express.static('public'))
app.use('/fb',findbook)
app.get('/',function(req,res){
    res.send('等待是一场与时光的较量')  
})
app.get('/guojianli',function(req,res){
    res.redirect('/static/loveyou/mylove.html')
})
var server = app.listen(process.env.PORT || 3000,function(){
    var host = server.address().address,
	port = server.address().port
    console.log('app listening at http://%s:%s',host,port)
})

