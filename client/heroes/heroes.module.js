require('angular');
var heroesController = require('./heroes.controller');

var Heroes = angular.module('heroes',[]);
Heroes.controller('heroesController',heroesController);

module.exports = Heroes;