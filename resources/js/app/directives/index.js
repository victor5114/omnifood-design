'use strict';
//App fetch
var app = require('angular').module('OmniApp');

app
.directive('searchResult', require('./search-result'))
.directive('forecastResult', require('./forecast-result'));