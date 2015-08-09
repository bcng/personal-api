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


});


    