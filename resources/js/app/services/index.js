'use strict';
//App fetch
var app = require('angular').module('OmniApp');

var service1 = require('./service1');
var forecastService = require('./forecastService');

app
.service('service1', service1)
.service('forecastService', forecastService);