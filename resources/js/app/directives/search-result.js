module.exports = function() {
    return {
        restrict: 'AECM',
        templateUrl: __dirname + '/templates/searchResult.html',
        replace: false,
        scope: {
            personObject: "=",
            formattedAddressFunction: "&"
        },
        compile: function(elem, attrs) {
            
            console.log('Compiling>>');
            console.log(elem.html);
            
            return {
                post: function(scope, elements, attrs) {
                    console.log('Post-linkg...');
                    
                    console.log(scope);
                    if (scope.personObject.name === 'Jane Doe')
                        elements.removeAttr('class');
                    
                    console.log(elements);
                }
            }
        }
    }
}