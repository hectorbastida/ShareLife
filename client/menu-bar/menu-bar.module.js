require('angular');

var menuBarDirective = require('./menu-bar.directive');

var menuBar = angular.module('menuBar',[]);
menuBar.directive('menuBar',menuBarDirective);

module.exports = menuBar;