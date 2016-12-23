(function() {
    'use strict';
    angular.module('app').factory('LoadingInterceptor', LoadingInterceptor);

    LoadingInterceptor.$inject = ['$q', '$rootScope', '$timeout'];

    function LoadingInterceptor($q, $rootScope, $timeout) {
        return {
            request: function(config) {
                $rootScope.loading = true;
                return config;
            },
            requestError: function(rejection) {
                $rootScope.loading = false;
                return $q.reject(rejection);
            },
            response: function(response) {
                $timeout(function() {
                    $rootScope.loading = false;
                }, 500);
                return response;
            },
            responseError: function(rejection) {
                $rootScope.loading = false;
                return $q.reject(rejection);
            }
        };
    }
})();