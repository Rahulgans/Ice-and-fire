

myApp.controller("BookDetailsController",["$http","ThroneService","$routeParams",function($http,ThroneService,$routeParams){
	
	var main = this;

	this.bookId = $routeParams.id1;

	this.bookData = [];
	this.author;

	this.charactersPov=[];
	
	this.booksDetails = function(){

	
		ThroneService.booksDetailsApi(main.bookId)
		.then(function successCallback(response){
	
		main.bookData.push(response.data);


		this.people =[]; // For more authors
		this.characters = []; //For POV characters 

			for(var i in response.data.authors){
				this.people.push(response.data.authors[i]);
				}

		main.author = this.people.toString(); 

		},function errorCallback(reason){
			alert("Error in GET");
		})
	};

	this.booksDetails();


}]) // controller ends
