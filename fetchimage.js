var queryString = require('querystring')
var cheerio = require("cheerio")
var co = require('co')
var corequest = require('co-request')
var express = require('express')
var router = express.Router()
var murl = require('./requestsupport')

router.get('/',function(req,resq){
	
	var url=req.query.iu
	co(function*(){
		var r = yield corequest(url)
		r.setEncoding('binary')
		for(var key in r.headers) {
			resq.set(key,r.headers[key])
		}
		resq.end(new Buffer(r.body,'binary'),'binary')
	})

})

module.exports = router

