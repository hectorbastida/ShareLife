
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'localStorageService','$http'];
/*
The controller's functionality
*/
var factory = function(localStorageService,$http){


	function add(historia){
			var data = {
				titulo:historia.titulo,
				contenido:historia.contenido,
				imagenes:historia.imagenes
			}
		    return $http.post('/historia/',data);
		    
	}
	function get(){
		return $http.get('/historia/');
    }
	return {
		add:add,
		get:get
	}
}


/*
Whe push the controller to our array of dependencies so that 
angular can work correctly even after minification 
*/
dependencies.push(factory);

module.exports = dependencies;