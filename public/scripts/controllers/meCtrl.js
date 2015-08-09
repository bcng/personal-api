app.controller('meCtrl', function($scope, personalInfoService) {

    var getHobbyInfo = function() {
        personalInfoService.getHobbies().then(function(response) {
            $scope.hobbies = response;
        })
    }

    getHobbyInfo();

    var getOccupationInfo = function() {
        personalInfoService.getOccupations().then(function(response) {
            $scope.occupations = response;
        })
    }

    getOccupationInfo();

    $scope.addNewHobby = function() {
        if ($scope.hobby) {
            personalInfoService.addHobby($scope.hobby).then(function(response) {
                $scope.hobbies = response;
                $scope.hobby = "";
            })
        }
    }

    $scope.addNewOccupation = function() {
        if ($scope.occupation) {
            personalInfoService.addOccupation($scope.occupation).then(function(response) {
                $scope.occupations = response;
                $scope.occupation = "";
            })
        }
    }


});
