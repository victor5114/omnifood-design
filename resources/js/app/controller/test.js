'use strict';
 
module.exports = function($location, $scope, $filter, $timeout) {
    
    $scope.people = [
        {
            name: 'John Doe',
            address: '555 Main .St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        {
            name: 'Jane Doe',
            address: '333 Main .St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        {
            name: 'Ge Doe',
            address: '444 Main .St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        },
        {
            name: 'Bor Doe',
            address: '999 Main .St.',
            city: 'New York',
            state: 'NY',
            zip: '11111'
        }
    ];
    
    $scope.formattedAddress = function(person) {
        return person.address + ', ' + person.city + ', ' + person.state + ' ' + person.zip 
    };
    
    $scope.title = 'Page 1';
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
        
    
    $scope.characters = 5;
    $scope.alertClick = function() {
        alert('Clicked');
    }
    
    $scope.name = 'VICTOR !!';
    
  
};