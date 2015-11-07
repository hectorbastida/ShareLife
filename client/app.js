global.$ = global.jQuery = require('jquery');
require('velocity');
require('angular');
require('lumx');
require('angular-ui-router');
require('angular-local-storage');
var MenuBar = require('./menu-bar/menu-bar.module');
var Home = require('./home/home.module');
var Conocer = require('./conocer/conocer.module');
var Heroes = require('./heroes/heroes.module.js')
var Historias = require('./historias/historias.module');

var ShareLife = angular.module('share-life',['lumx','ui.router','LocalStorageModule','menuBar','home','conocer','heroes','historias']);
var controller = ShareLife.controller('mainController',['$scope', function($scope){
    
}]);
ShareLife.config([
	'$stateProvider','$urlRouterProvider','localStorageServiceProvider','$httpProvider',
	function($stateProvider,$urlRouterProvider,localStorageServiceProvider,$httpProvider){
		 localStorageServiceProvider.setPrefix('share-life')
		 .setStorageCookie(45,'/')
		 .setStorageCookieDomain('')
		 .setNotify(true, true);
		 $urlRouterProvider.otherwise('/');
		$stateProvider
                .state('index', {
		            url: '/',
		            templateUrl: './home/home.partial.html',
		            controller: 'homeController',
		           'class':'home',
				    data: {
				      requireLogin: false
				    }		           
		        })	 
                .state('conocer', {
		            url: '/conocer',
		            templateUrl: './conocer/conocer.partial.html',
		            controller: 'conocerController',
		           'class':'conocer',
				    data: {
				      requireLogin: false
				    }		           
		        })
		        .state('historias', {
		            url: '/historias',
		            templateUrl: './historias/historias.partial.html',
		            controller: 'historiasController',
		           'class':'historias',
				    data: {
				      requireLogin: false
				    }		           
		        })	
		        .state('heroes', {
		            url: '/heroes',
		            templateUrl: './heroes/heroes.partial.html',
		            controller: 'heroesController',
		           'class':'heroes',
				    data: {
				      requireLogin: false
				    }		           
		        })			        
		        .state('detalleHistoria', {
		            url: '/detalleHistoria',
		            templateUrl: './historias/historias-detail.partial.html',
		            controller: 'historiasDetalleController',
		           'class':'heroes',
				    data: {
				      requireLogin: false
				    }		           
		        })		

		         .state('detalleHistoria1', {
		            url: '/detalleHistoria1',
		            templateUrl: './historias/historias-detail.partial.1.html',
		            controller: 'historiasDetalleController',
		           'class':'heroes',
				    data: {
				      requireLogin: false
				    }		           
		        })	
		        .state('detalleHistoria2', {
		            url: '/detalleHistoria2',
		            templateUrl: './historias/historias-detail.partial.2.html',
		            controller: 'historiasDetalleController',
		           'class':'heroes',
				    data: {
				      requireLogin: false
				    }		           
		        })	
		        		        		         .state('detalleHistoria3', {
		            url: '/detalleHistoria3',
		            templateUrl: './historias/historias-detail.partial.3.html',
		            controller: 'historiasDetalleController',
		           'class':'heroes',
				    data: {
				      requireLogin: false
				    }		           
		        })	
		    }]);