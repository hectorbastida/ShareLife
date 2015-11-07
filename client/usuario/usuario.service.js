
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'localStorageService','$http'];
/*
The controller's functionality
*/
var factory = function(localStorageService,$http){
    var users = [{username:'HectorBastida',password:'1234567'},{username:'share life',password:'1234567'}]
    if(localStorageService.get('users')){
        
        
    }else{
        localStorageService.set('users',users);
        
    }
	function add(username,password){
/*			var data = {
				titulo:historia.titulo,
				contenido:historia.contenido,
				imagenes:historia.imagenes
			}
		    return $http.post('/historia/',data);*/
		    var currentUsers = localStorageService.get('users');
		    
		    if(currentUsers){
		        currentUsers.push({username:username,password:password});
		    }else{
		        localStorageService.set();
		    }
		    
	}
	function login(username,password){
	    var currentUsers = localStorageService.get('users');
	    for(var i=0;i>currentUsers.length;i++){
	        if(currentUsers[i].username === username && currentUsers[i].password === password){
	            localStorageService.set('uname',username);
	            return true;
	        }
	    }
            return false;
		
		
    }
	return {
		add:add,
		login:login
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;