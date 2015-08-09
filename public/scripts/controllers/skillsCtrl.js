app.controller('skillsCtrl', function($scope, personalInfoService) {
    var getSkillInfo = function() {
        personalInfoService.getSkills().then(function(response) {
            $scope.skills = response;
        })
    }

    getSkillInfo();

});
