var express = require('express')
// var http = require('http')
// var url = require('url')
// var queryString = require('querystring')
// var request = require('request')
// var cheerio = require("cheerio")
// var promise = require('request-promise')
var app = express();
// app.use(express.static('public'))
app.use('/static',express.static('public'))
app.get('/',function(req,res){
    // res.send('guojianli')
    res.redirect('/static/loveyou/mylove.html')
})
app.get('/love',function(req,res){
    res.send('郭')
})
var server = app.listen(process.env.PORT || 3000,function(){
    var host = server.address().address,
	port = server.address().port
    console.log('app listening at http://%s:%s',host,port)
})
// http.createServer(function(req,resq){
// 	var bookname=queryString.parse(url.parse(req.url).query).n
// 	
// 	resq.setHeader('Content-Type','text/html;charset=utf8')
// 	//resq.write("<style>*{color:#999}a{color:#009;}</style>")
// 	request("https://raw.githubusercontent.com/lijianwei-jj/heroku/master/README.md",function(e,res,body){
// 		console.log(body)
// 		console.log("request end")
// 		resq.end(body)
// 	})
// 	console.log("what?")
// 	// resq.end("i love guojianli");
// 
// }).listen(process.env.PORT || 3000)

