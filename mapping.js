var express = require('express')
var router = express.Router()

router.use('/', function(req,res,next){
    var referer = req.headers.referer
    if(req.url == '/' && referer){
        var path = referer.match(/http:\/\/\w+.\w+(.*$)/)[1]
        if (path.length > 1) {
	    res.redirect(path)
	    return
        }
    }
    next()
})

module.exports = router
