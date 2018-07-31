(function(){
    'use strict';

    angular
        .module('giBots')
        .config(stateConfig);

    stateConfig.$inject = ['$urlRouterProvider'];

    function stateConfig($urlRouterProvider){
        $urlRouterProvider.otherwise('users');
    }
})();