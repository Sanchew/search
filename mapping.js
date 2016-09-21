var express = require('express')
var router = express.Router()

router.use('/', function(req,res,next){
    if(req.url == '/'){
        var referer = req.headers.referer
        var path = referer.match(/http:\/\/\w+.\w+(.*$)/)[1]
        if (path.length > 0) {
            req.url = path
	    res.redirect(path)
	    return
            var query = path.split('?')
            if (query.length > 1) {
                req.query = queryString.parse(query[1])
            }
        }
    }
    next()
})

module.exports = router
