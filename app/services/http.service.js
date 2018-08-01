(function(){
    'use strict';

    angular
        .module('giBots')
        .factory('HttpService', HttpService);

    HttpService.$inject = ['$http', '$q'];

    function HttpService($http, $q){
        var _this = {};
        _this.fetch = _fetch;
        return _this;

        function _fetch(config){
            var deferred = $q.defer();
            $http(config)
            .then(function success(response){
                deferred.resolve(response);
            }, function error(rejection){
                deferred.reject(rejection);
            });
            return deferred.promise;
        }

    }
})();
