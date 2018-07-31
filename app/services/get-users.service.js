(function(){
    'use strict';

    angular
        .module('giBots')
        .factory('GetUsersService', GetUsersService);

    GetUsersService.$inject = ['$http', '$q'];

    function GetUsersService($http){
        var _this = {};
        _this.fetchUserList = _fetchUserList;
        return _this;

        function _fetchUserList(){
            $http.get('https://randomuser.me/api/?results=100');
        }
    }
})();