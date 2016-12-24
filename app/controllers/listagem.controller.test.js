(function() {

    'use strict';

    describe('Controller: ListagemController', function() {
        //Instancia uma nova versão do meu módulo antes de cada teste.
        beforeEach(module('app'));

        var ctrl;

        describe('Teste para verificar se a variavel shots está preenchida', function() {
            var shots;
            beforeEach(inject(function($controller) {
                shots = { data : ['shot1','shot2','shot3']};
                ctrl = $controller('ListagemController',{shots : shots});
            }));

            it('ela deve ser carregada e estar disponível no controller', function() {
                expect(ctrl.shots).toEqual(shots.data);
            });
        });

        describe('Teste para verificar se a variavel shots está preenchida quando houver falha', function() {
            var shots;
            beforeEach(inject(function($controller) {
                shots = { data : undefined};
                ctrl = $controller('ListagemController',{shots : shots});
            }));

            it('ela deve estar com o valor undefined', function() {
                expect(ctrl.shots).not.toBeDefined();
            });
        });
    });

})();