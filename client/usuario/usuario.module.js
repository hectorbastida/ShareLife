require('angular');
var usuarioController = require('./usuario.controller');

var Usuario = angular.module('home',[]);
Usuario.controller('usuarioController',usuarioController);

module.exports = Usuario;