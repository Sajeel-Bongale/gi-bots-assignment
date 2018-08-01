(function(){
    'use strict';

    angular
        .module('giBots')
        .constant('CONSTANTS', {
            DOMAIN: 'https://randomuser.me',
            USER_LIST: '/api/?results=100'
        });
})();