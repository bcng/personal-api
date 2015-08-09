app.service('personalInfoService', function($http, $q) {

    this.getName = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:8234/api/name'
        }).then(function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            console.log("error: " + error)
        });
        return deferred.promise;
    };

    this.getLocation = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:8234/api/location'
        }).then(function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            console.log("error: " + error)
        });
        return deferred.promise;
    };

    this.getHobbies = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:8234/api/hobbies'
        }).then(function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            console.log("error: " + error)
        });
        return deferred.promise;
    };

    this.getOccupations = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:8234/api/occupations'
        }).then(function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            console.log("error: " + error)
        });
        return deferred.promise;
    };

    this.getSkills = function() {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:8234/api/skills'
        }).then(function(response) {
            deferred.resolve(response.data);
        }, function(error) {
            console.log("error: " + error)
        });
        return deferred.promise;
    };



});
