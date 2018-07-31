(function(){
    'use strict';

    angular
            .module('giBots')
            .config(usersStateConfig);

    usersStateConfig.$inject = ['$stateProvider'];

    function usersStateConfig($stateProvider){

        var userConfig = {
            url: '/users',
            templateUrl: 'app/views/users/users.html',
            controller: 'UsersController',
            controllerAs: 'vm',
            resolve: {
                users: ['GetUsersService', function(GetUsersService){
                    GetUsersService.fetchUserList();
                }]
            }
        };

        $stateProvider.state('users', userConfig);

    }
})();