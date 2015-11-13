'use strict';

module.exports = function($scope, forecastService, $resource, $routeParams, $location) {
    $scope.forecast_wait = true;
    $scope.city = forecastService.city;
    $scope.days = $routeParams.days || '2';
    
    var weatherAPI = $resource("http://api.openweathermap.org/data/2.5/forecast", {
        callback: "JSON_CALLBACK" }, { get: { method: "JSONP" }});
    
    var wObject = { 
        q: $scope.city,
        cnt: $scope.days,
        appid: "2de143494c0b295cca9337e1e96b00e0" 
    };
    
    weatherAPI.get(wObject, 
    function success(result) {
        $scope.forecast_wait = false;
        $scope.weatherResult = result;
    },
    function error(err){
        
        alert('oops API issue');
    });
    
    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8*(degK - 273)) + 32);
    }
    
    $scope.convertToDate = function(dt) {
        return new Date(dt * 1000);
    }

}
