(function() {
    'use strict';
    angular.module('app').factory('AuthInterceptor', AuthInterceptor);

    AuthInterceptor.$inject = ['Constants'];

    function AuthInterceptor(Constants) {
        return {
            request: function(config) {

                config.headers.Authorization = 'Bearer ' + Constants.TOKEN;

                return config;
            }
        };
    }
})();