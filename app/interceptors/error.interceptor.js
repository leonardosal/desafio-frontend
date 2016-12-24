(function() {
    'use strict';
    angular.module('app').factory('ErrorInterceptor', ErrorInterceptor);

    ErrorInterceptor.$inject = ['$q', '$injector','$window'];

    function ErrorInterceptor($q, $injector, $window) {
        return {
		responseError: function (rejection) {
			
			$window.location.href = '#!/erro';
			
			return $q.reject(rejection);
		}
	};
    }
})();