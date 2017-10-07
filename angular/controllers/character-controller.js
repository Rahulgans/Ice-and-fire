

myApp.controller("CharDetailsController",["$http","ThroneService","$routeParams",function($http,ThroneService,$routeParams){
	
	var main = this;

	this.charId = $routeParams.id2;
	this.charData = [];
	this.seasons;
		// console.log(this.charId);

	this.charactersDetails = function(){

		ThroneService.charactersDetailsApi(main.charId)
		.then(function successCallback(response){

			main.charData.push(response.data);  
			this.series =[]; // For more authors
		

			for(var i in response.data.tvSeries){
				this.series.push(response.data.tvSeries[i]);
				//console.log(main.people);
				}
			main.seasons = this.series.toString(); 


		},function errorCallback(reason){
			alert("Error in GET");
		})
	};     //function ends

	this.charactersDetails();
	
}]) // controller ends