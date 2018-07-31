(function(){
    'use strict';

    angular
        .module('giBots')
        .controller('UsersController', UsersController);

    UsersController.$inject = [];

    function UsersController(){
        var vm = this;

        vm.name = "sajeel"

    }
})();
