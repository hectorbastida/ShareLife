require('angular');
require('velocity');
var conocerController = require('./conocer.controller');

var Conocer = angular.module('conocer',[]);
Conocer.controller('conocerController',conocerController);

module.exports = Conocer;