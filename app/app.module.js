(function(){
	'use strict';
	var modules = ['ui.router', 'ngSanitize'];
	var app = angular.module('app', modules);

	app.config(function ($httpProvider) {
    	$httpProvider.interceptors.push('AuthInterceptor');
    	$httpProvider.interceptors.push('LoadingInterceptor');
    	$httpProvider.interceptors.push('ErrorInterceptor');
    });
})();