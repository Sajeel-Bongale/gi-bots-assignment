(function(){
    'use strict';

    angular
        .module('giBots')
        .controller('UserModalController', UsersController);

    UsersController.$inject = ['user', '$uibModalInstance'];

    function UsersController(user, $uibModalInstance){
        var vm = this;
        vm.user = user;

        vm.close = _close;

        function _close(){
            $uibModalInstance.close();
        }
    }
})();