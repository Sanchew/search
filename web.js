var http = require('http')
var url = require('url')
var queryString = require('querystring')
var request = require('request')
var cheerio = require("cheerio")
var promise = require('request-promise')

http.createServer(function(req,resq){
	var bookname=queryString.parse(url.parse(req.url).query).n
	
	resq.setHeader('Content-Type','text/html;charset=utf8')
	//resq.write("<style>*{color:#999}a{color:#009;}</style>")
	request("http://guojianli.likesyou.org",function(e,res,body){
		resq.end(body)
	})
	console.log("what?")
	// resq.end("i love guojianli");

}).listen(process.env.PORT || 3000)

