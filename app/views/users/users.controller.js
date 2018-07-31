(function(){
    'use strict';

    angular
        .module('giBots')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['users', 'GetUsersService'];

    function UsersController(users, GetUsersService){
        var vm = this;

        _init();

        function _init(){
            vm.name = "sajeel"
            /*GetUsersService.fetchUserList()
            .then(function success(data){
                vm.users = data;
            });*/
        }

    }
})();
