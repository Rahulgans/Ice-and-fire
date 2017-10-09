

myApp.controller("HouseDetailsController",["$http","ThroneService","$routeParams",function($http,ThroneService,$routeParams){
	
	var main = this;

	this.houseData = [];

	this.houseId = $routeParams.id3;
	this.titles;

	this.housesDetails = function(){

		ThroneService.housesDetailsApi(main.houseId)
		.then(function successCallback(response){
		
			main.houseData.push(response.data);

			this.names =[]; // For more titles
			

			for(var i in response.data.titles){
				this.names.push(response.data.titles[i]);
			}

			main.titles = this.names.toString(); 


		},function errorCallback(reason){
			alert("Error in GET");
		})

	}; // function ends

	this.housesDetails();
	
}]) // controller ends