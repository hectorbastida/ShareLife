var menuBarController = require('./menu-bar.controller');

var directive = function(){
	return {
		restrict: 'E',
		templateUrl:'./menu-bar/menu-bar.partial.html',
		controller:menuBarController,
		scope:true
	}
}

module.exports = directive;