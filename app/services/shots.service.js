(function(){
    'use strict';
    angular.module('app').factory('ShotsService', ShotsService);

    ShotsService.$inject = ['$http', 'Constants'];

    function ShotsService($http, Constants) {
    	
        var shots = {
            list: list,
            listById: listById
        };

        return shots;

        function list() {
            return $http.get(Constants.BASE_URL + '/popular_shots');
        }

        function listById(id) {
            return $http.get(Constants.BASE_URL + '/shots' + id);
        }
    }
})();
