(function(){
    'use strict';
    angular.module('app').config(function ($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise('/listagem');
           
            $stateProvider.state('listagem', {
                url: '/listagem',
                templateUrl: 'app/views/shot-listagem/listagem.html',
                controller: 'ListagemController',
                controllerAs: 'ListCtrl',
                resolve: {
                    shots: function (ShotsService) {
                        return ShotsService.list();
                    }
                }
            }).state('detalhes', {
                url: '/detalhes/:id',
                templateUrl: 'app/views/shot-detalhes/detalhes.html',
                controller: 'DetalhesController',
                controllerAs: 'DtCtrl',
                resolve: {
                    shot: function (ShotsService, $stateParams) {
                        return ShotsService.listById($stateParams.id);
                    }
                }
            }).state('erro', {
                url: '/erro',
                templateUrl: 'error.html'
            });
    });
})();
