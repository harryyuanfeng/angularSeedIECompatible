var express = require('express');
var http = require('http');
var bodyParser = require('body-parser');
var compress = require('compression');
var wechat = require('wechat-enterprise');
var moment = require('moment');
var logger = require('tracer').console();
var request = require('request');

var PORT = 8000;
var app = express();
app.use(compress());
app.use(bodyParser());
app.use('/',express.static(__dirname + '../../example'));

http.createServer(app).listen(PORT, function () {
    logger.log('Express server listening on port ' + PORT);
});
logger.log('hello angular seed ie compatible');