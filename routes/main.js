const { resolveSoa } = require('dns');
var express = require('express')
var router = express.Router()
const path = require('path');

const indexHtml = require("../index.html")


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
    console.log('Time: ', Date.now())
    next()
})
// define the home page route


router.get('/', function (req, res) {
    // res.send("uuuu")
    // path.basename(path.dirname("/index.html"))
    // console.log(path.resolve(__dirname, "/git-test", "index.html"));
    res.sendFile(indexHtml);
})
// define the about route
router.get('/about', function (req, res) {
    res.send('About birds')
})

module.exports = router