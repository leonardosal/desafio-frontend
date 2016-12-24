(function() {

    'use strict';

    describe('Interceptor: Auth Interceptor', function() {
        //Instancia uma nova versão do meu módulo antes de cada teste.
        beforeEach(module('app'));

        var authInterceptor, httpBackend, Constants;
        
        beforeEach(function() {
            Constants = { TOKEN: '123456789' };
            module(function($provide) {
                $provide.constant('Constants', Constants);
            });   
        });

        beforeEach(inject(function($injector, $httpBackend){
            authInterceptor = $injector.get('AuthInterceptor', {Constants : Constants});
        }));

        describe('Teste para verificar se o interceptador de auth está funcionando corretamente', function() {
            var config;
            beforeEach(function() {
                config = { headers: { Authorization : null} };
                authInterceptor.request(config);
            });

            it('deve setar o header com o token de autorização', function() {
                
               expect(config.headers.Authorization).toEqual('Bearer ' + Constants.TOKEN);

            });
        });

    });
})();