(function(){
    'use strict';

    angular
        .module('giBots')
        .controller('UsersController', UsersController);

    UsersController.$inject = ['UserService', '$uibModal'];

    function UsersController(UserService, $uibModal){
        var vm = this;

        vm.getUserDetails = _getUserDetails;

        vm.searchUser = [];
        vm.userList = [];

        _init();

        function _init(){
            UserService.getUserList()
            .then(function success(response){
               vm.userList =  response.data.results;
            }, function error(rejection){
                vm.userList = [];
            });
        }

        function _getUserDetails(user){
            var userModal = $uibModal.open({
                templateUrl: 'app/views/modals/user/user-details.html',
                controller: 'UserModalController',
                controllerAs: 'vm',
                resolve: {
                    user: function(){
                        return user;
                    }
                }
            });

            userModal.result
            .then(function success(){
            }, function error(rejection){
            });
        }

    }
})();
