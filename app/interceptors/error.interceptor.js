(function() {
    'use strict';
    angular.module('app').factory('ErrorInterceptor', ErrorInterceptor);

    ErrorInterceptor.$inject = ['$q', '$injector'];

    function ErrorInterceptor($q, $injector) {
        return {
		responseError: function (rejection) {
			
			if (rejection) {
				$injector.get('$state').transitionTo('erro');
			}
			return $q.reject(rejection);
		}
	};
    }
})();