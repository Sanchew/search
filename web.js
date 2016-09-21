var express = require('express')
var favicon = require('serve-favicon')
var findbook = require('./searchbook')

// var http = require('http')
// var url = require('url')
// var queryString = require('querystring')
// var request = require('request')
// var cheerio = require("cheerio")
// var promise = require('request-promise')
var app = express();
// app.use(express.static('public'))
// app.set('views',__dirname)
// app.engine('html',require('ejs').renderFile)
// app.set('view engine','html')
app.use(favicon(__dirname + '/public/favicon.ico'))
app.use(function(req,res,next){
    var referer = req.headers.referer
    console.info(`ref = ${referer}`)
    console.info(`===#${req.url}# #${referer}%`)
    if (req.referer) {
	console.info(`#${req.url}# #${req.referer}%`)
	//req.url = req.referer
    }
    next()
})
app.use('/static',express.static('public'))
app.use('/fb',findbook)
app.get('/',function(req,res){
    res.send('等待是一场与时光的较量')  
})
app.get('/love',function(req,res){
    res.redirect('/static/loveyou/mylove.html')
    // res.sendFile('/public/loveyou/mylove.html')
})
var server = app.listen(process.env.PORT || 3000,function(){
    var host = server.address().address,
	port = server.address().port
    console.log('app listening at http://%s:%s',host,port)
})

