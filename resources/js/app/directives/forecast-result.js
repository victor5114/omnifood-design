module.exports = function() {
    return {
        restrict: 'E',
        templateUrl: __dirname + '/templates/forecastResult.html',
        replace: false,
        scope: {
            forecastElem: "=",
            convertToStandard: "&",
            convertToDate: "&",
            dateFormat: "@"
        }
    }
}