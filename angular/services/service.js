
myApp.service("ThroneService",function($http){

	var main = this ;

	this.baseUrl= "https://anapioficeandfire.com/api";
	
	this.ice_fire = function(){

		return $http.get(main.baseUrl);
	}
})