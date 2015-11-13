'use strict';
    
module.exports = function($log, $scope, $filter, $timeout, $routeParams, service1, forecastService, $location) {
    $scope.title = 'Page 2';
    $scope.handle = '';
    $scope.lowercaseHandle = function() {
        return $filter('lowercase')($scope.handle);
    }
    
    $scope.$watch('handle', function(newValue, oldValue) {
        if(newValue === oldValue) {
            console.log('init phase');
        } else {
            console.info('changed');
            console.log('Old: ' + oldValue);
            console.log('New: ' + newValue);
        }
    });
    
    $scope.num = $routeParams.num;
    
    $scope.name = 'VICTOR !!';
    
    $scope.city = forecastService.city;
    
    $scope.$watch('city', function() {
        forecastService.city = $scope.city;
    });
    
    $scope.submit = function() {
        $location.path("/forecast");
    }
};