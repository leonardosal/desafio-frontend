(function() {

    'use strict';

    describe('Interceptor: Loading Interceptor', function() {
        //Instancia uma nova versão do meu módulo antes de cada teste.
        beforeEach(module('app'));

        var loadingInterceptor, httpBackend, rootScope, timeout;

        beforeEach(inject(function($injector, $rootScope, $timeout) {
            loadingInterceptor = $injector.get('LoadingInterceptor');
            rootScope = $rootScope;
            timeout = $timeout;
        }));

        describe('teste para verificar se o interceptador de loading está funcionando corretamente', function() {
            describe('quando uma requisição é disparada', function() {
                beforeEach(function() {
                    var config = {};
                    loadingInterceptor.request(config);
                });

                it('deve setar a variavel loading do escopo global com o valor true', function() {
                    expect(rootScope.loading).toBe(true);
                });
            });

            describe('quando acontece um erro na requisição', function() {

                beforeEach(function() {
                    var rejection = {};
                    loadingInterceptor.requestError(rejection);
                });

                it('deve setar a variavel loading do escopo global com o valor false', function() {
                    expect(rootScope.loading).toBe(false);
                });
            });


            describe('quando uma requisição retorna uma resposta', function() {

                beforeEach(function() {
                    var response = {};
                    loadingInterceptor.response(response);
                });

                it('deve setar a variavel loading do escopo global com o valor false', function() {
                    timeout.flush();
                    expect(rootScope.loading).toBe(false);

                });
            });

            describe('quando uma requisição retorna uma resposta com erro', function() {
                var promise;
                beforeEach(function() {
                    var rejection = {};
                    promise = loadingInterceptor.responseError(rejection);
                });

                it('deve setar a variavel loading do escopo global com o valor false', function() {
                    promise.then(function(){
                        expect(rootScope.loading).toBe(false);
                    });
                    
                });
            });

        });


    });
})();