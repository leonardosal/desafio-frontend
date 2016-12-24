(function(){

'use strict';

describe('Controller: DetalhesController', function() {
	//Instancia uma nova versão do meu módulo antes de cada teste.
	beforeEach(module('app'));

	var ctrl;
   	
   	describe('Teste para verificar se os detalhes do shot são preenchidos corretamente', function() {
		var shot;
		beforeEach(inject(function($controller){
   			shot = { data : {title : 'shot1', image : 'http://teste', autor : 'fulano'}};
   			ctrl = $controller('DetalhesController', { shot : shot});
   		}));

		it('eles devem ser carregados e estar disponível no controller', function() {
		  	expect(ctrl.shot).toBe(shot.data);
		});
	});

	describe('Teste para verificar se os detalhes do shot são preenchidos quando hover falha', function() {
		var shot;
		beforeEach(inject(function($controller){
   			shot = { data : undefined};
   			ctrl = $controller('DetalhesController', { shot : shot});
   		}));

		it('eles devem estar com o valor undefined', function() {
            expect(ctrl.shots).not.toBeDefined();
        });
	});
});

})();