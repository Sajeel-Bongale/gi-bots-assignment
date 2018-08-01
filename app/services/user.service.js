(function(){
    'use strict';

    angular
        .module('giBots')
        .factory('UserService', UserService);

    UserService.$inject = ['HttpService', 'CONSTANTS'];

    function UserService(HttpService, CONSTANTS){
        var _this = {};
        _this.getUserList = _getUserList;
        return _this;

        function _getUserList(){
            var config = {};
            config.url = CONSTANTS.DOMAIN + CONSTANTS.USER_LIST;
            config.method = 'GET';
            return HttpService.fetch(config);
        }
    }
})();