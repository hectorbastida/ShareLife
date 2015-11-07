require('angular');
var homeController = require('./home.controller');

var Home = angular.module('home',[]);
Home.controller('homeController',homeController);

module.exports = Home;