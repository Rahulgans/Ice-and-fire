

myApp.controller("CharDetailsController",["$http","ThroneService","$routeParams",function($http,ThroneService,$routeParams){
	
	var main = this;

	this.charId = $routeParams.id2;
	this.charData = [];

		// console.log(this.charId);

	this.charactersDetails = function(){

		ThroneService.charactersDetailsApi(main.charId)
		.then(function successCallback(response){
		//	console.log(response.data);

			main.charData.push(response.data);  


		},function errorCallback(reason){
			alert("Error in GET");
		})
	};     //function ends

	this.charactersDetails();
	
	}]) // controller ends