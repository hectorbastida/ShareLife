
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
   	document.getElementById('app').className = 'home';



    $scope.notify = function(type,message){
        if(type === 'success'){
            LxNotificationService.success(message);
        }
        if(type === 'simple'){
            LxNotificationService.notify(message);
        }
    }
    $scope.toggleNotify = function(value){
        $scope.isNotifyOpened = value;
    } 
    
    $scope.showLinearProgress = function(){
        LxProgressService.linear.show('#19d8da', '#progress');
    };
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;