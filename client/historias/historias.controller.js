
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','LxDialogService','LxNotificationService','LxProgressService'];
/*
The controller's functionality
*/
var controller = function($scope,LxDialogService,LxNotificationService,LxProgressService){

	document.getElementById('app').className = '';
   	document.getElementById('app').className = 'historias';



}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;