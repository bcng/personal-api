app.controller('homeCtrl', function($scope, personalInfoService) {

    var getNameInfo = function() {
        personalInfoService.getName().then(function(response) {
            $scope.name = response;
        })
    }

    getNameInfo();

    var getLocationInfo = function() {
        personalInfoService.getLocation().then(function(response) {
            $scope.location = response;
        })
    }

    getLocationInfo();

});
