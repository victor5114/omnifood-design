var angular = require('angular');

require('angular-route');
require('angular-resource');
require('restangular');


angular.module('OmniApp', ['ngRoute','ngResource', 'restangular']);

require('./routes');
require('./services');
require('./directives');
require('./controller');


