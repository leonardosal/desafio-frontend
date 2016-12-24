(function() {

    'use strict';

    describe('Service: Shots Service', function() {
        //Instancia uma nova versão do meu módulo antes de cada teste.
        beforeEach(module('app'));

        var httpBackend;

        describe('Teste para verificar a requisição de busca dos shots no servidor', function() {
            var shots = ['sho1', 'sho2', 'sho3'];
            beforeEach(inject(function($injector, $httpBackend, Constants) {
                httpBackend = $injector.get('$httpBackend');
                httpBackend.when('GET', Constants.BASE_URL + '?list=popular').respond(shots);
            }));

            it('deve retornar a lista de shots corretamente', inject(function(ShotsService) {
                ShotsService.list().then(function(result) {
                    expect(result.data).toEqual(shots);
                })
                httpBackend.flush();
            }));
        });

        describe('Teste para verificar a requisição de busca pelos detalhes de um shot com o id como parametro', function() {
            var ID = 1, shot = {id : 1, name : 'shot1', description : 'teste'};
            beforeEach(inject(function($injector, $httpBackend, Constants) {
                httpBackend = $injector.get('$httpBackend');
                httpBackend.when('GET', Constants.BASE_URL + '/' + shot.id).respond(shot);
            }));

            it('deve retornar as informações do shot corretamente', inject(function(ShotsService) {
                ShotsService.listById(ID).then(function(result) {
                    expect(result.data).toEqual(shot);
                })
                httpBackend.flush();
            }));
        });
    });
})();