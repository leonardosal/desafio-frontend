(function(){
	'use strict';
	angular.module('app').controller('DetalhesController', DetalhesController);

	DetalhesController.$inject = ['shot'];

	function DetalhesController(shot){
	    var vm = this;
	    vm.shot = shot.data;
	}	
})();
