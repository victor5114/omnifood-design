'use strict';
//App fetch
var app = require('angular').module('OmniApp');

app
.controller('forecastController', require('./forecast'))
.controller('testController', require('./test'))
.controller('test2Controller', require('./test2'));