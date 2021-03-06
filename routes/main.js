const { resolveSoa } = require('dns');
var express = require('express')
var router = express.Router()
const path = require('path');


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

// define the home page route
router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "../src/index.html"))
})
router.get('/test', function (req, res) {
    res.sendFile(path.resolve(__dirname, "../src/second.html"))
})
router.get('/blog', function (req, res) {
    res.sendFile(path.resolve(__dirname, "../src/blog.html"))
})

router.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router