app.controller('skillsCtrl', function($scope, personalInfoService) {
    var getSkillInfo = function() {
        personalInfoService.getSkills().then(function(response) {
            $scope.skills = response;
        })
    }

    getSkillInfo();

    $scope.addNewSkill = function() {
        personalInfoService.addSkill($scope.skill, $scope.experience).then(function(response) {
            console.log(response);
            $scope.skills = response;
            $scope.skill = "";
            $scope.experience = "";
        })
    }


});
