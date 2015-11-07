
/*
This array contains the name of the injected dependencies, this is for minification purposes
*/
var dependencies = [
	'localStorageService','$http'];
/*
The controller's functionality
*/
var factory = function(localStorageService,$http){


	function add(heroe){
			var data = {
				oks:heroe.titulo,
				contenido:heroe.contenido,
				imagenes:heroe.imagenes
			}
		    return $http.post('/heroe/',data);
		    
	}
	function get(){
		return $http.get('/heroe/');
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