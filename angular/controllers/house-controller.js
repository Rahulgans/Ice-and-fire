

myApp.controller("HouseDetailsController",["$http","ThroneService","$routeParams",function($http,ThroneService,$routeParams){
	
	var main = this;

	this.houseData = [];

	this.houseId = $routeParams.id3;

	this.housesDetails = function(){

		ThroneService.housesDetailsApi(main.houseId)
		.then(function successCallback(response){
		
			main.houseData.push(response.data);

		},function errorCallback(reason){
			alert("Error in GET");
		})

	}; // function ends

	this.housesDetails();
	
}]) // controller ends