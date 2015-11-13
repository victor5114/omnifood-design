'use strict';

var express = require('express'),
  path = require('path'),
  http = require('http'),
  routes = require('./routes');

var app = module.exports = express();


app.set('port', process.env.PORT || 8080);

//    app.engine('html', require('ejs').renderFile);
//    app.set('view engine', 'html');
//    app.set('views', __dirname + '/resources/views');


app.use(express.static(path.join(__dirname,'resources')));

/*
* Routes
*/
app.get('/', routes.index);
app.get('/templates/:name', routes.templates);
app.get('/templates/:name/:num', routes.templates);
app.get('/resources/js/app/directives/templates/:name', routes.directives);
app.get('*', routes.index);

http.createServer(app).listen(app.get('port'), function() {
    console.log('server running on port :' + app.get('port'));
})