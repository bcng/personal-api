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


});
