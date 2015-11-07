/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'$scope','$timeout','LxNotificationService'];
/*
The controller's functionality
*/
var controller = function($scope,$timeout,LxNotificationService){


	    $(".btn-notify").click(function (e) {
      $(".notifications-menu").fadeToggle("fast");
     e.stopImmediatePropagation();
        if($(".top-menu").is(":visible")) {
            $(".top-menu").fadeOut("fast");
        }
    });

    $(document).click(function (e) {
        if($(".notifications-menu").is(":visible") && !($(".notifications-menu").is(e.target))) {
        $(".notifications-menu").fadeOut("fast");
     }
    });

    $(".btn-menu").click(function (e) {
      $(".top-menu").fadeToggle("fast");
        e.stopImmediatePropagation();
        if($(".notifications-menu").is(":visible")) {
            $(".notifications-menu").fadeOut("fast");
        }
    });

    $(document).click(function (e) {
        if($(".top-menu").is(":visible") && !($(".top-menu").is(e.target))) {
        $(".top-menu").fadeOut("fast");
     }
    });
   
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(controller);

module.exports = dependencies;