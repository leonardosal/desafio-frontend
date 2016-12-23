(function(){
	'use strict';
	angular.module('app').controller('ListagemController', ListagemController);

	ListagemController.$inject = ['shots'];

	function ListagemController(shots){
	    
	   var vm = this;
	   vm.shots = shots.data;
	}
})();