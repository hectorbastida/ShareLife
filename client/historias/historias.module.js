require('angular');
var historiasController = require('./historias.controller');
var historiasDetalleController = require('./historias-detalle.controller')

var Historia = angular.module('historias',[]);
Historia.controller('historiasController',historiasController);
Historia.controller('historiasDetalleController',historiasDetalleController);

module.exports = Historia;