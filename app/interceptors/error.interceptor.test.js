(function() {

    'use strict';

    describe('Interceptor: Erro Interceptor', function() {
        //Instancia uma nova versão do meu módulo antes de cada teste.
        beforeEach(module('app'));

        var errorInterceptor, window, URL_ERRO = '#!/erro';
        
        beforeEach(function() {
            window = { location: { href: null } };
            module(function($provide) {
                $provide.value('$window', window);
            });   
        });

        beforeEach(inject(function($injector){
            errorInterceptor = $injector.get('ErrorInterceptor', {$window : window});
        }));

        describe('Teste para verificar se o interceptador de erros está funcionando corretamente', function() {
           
            beforeEach(function() {
                var rejection = { status: 404 };
                errorInterceptor.responseError(rejection);
            });

            it('deve troca o estado para o de erro', function() {
                expect(window.location.href).toEqual(URL_ERRO);
            });
        });

    });
})();