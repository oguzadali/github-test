const { resolveSoa } = require('dns');
var express = require('express')
var router = express.Router()
const path = require('path');
const moment = require('moment');




// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})

const date = moment().format('MMMM Do YYYY, h:mm:ss a')
// define the home page route
router.get('/', function (req, res) {
    res.sendFile(path.resolve(__dirname, "../src/index.html"), { date: date })
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