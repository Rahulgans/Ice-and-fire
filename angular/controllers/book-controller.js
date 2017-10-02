

myApp.controller("BookDetailsController",["$http","ThroneService","$routeParams",function($http,ThroneService,$routeParams){
	
	var main = this;

	this.bookId = $routeParams.id1;

	this.bookData = [];
	

	this.charactersPov=[];


	this.booksDetails = function(){
	
	ThroneService.booksDetailsApi(main.bookId)
	.then(function successCallback(response){
	
		main.bookData.push(response.data);


		this.people =[]; // For more authors
		this.characters = []; //For POV characters 

			for(var i in response.data.authors){
				this.people.push(response.data.authors[i]);
				//console.log(main.people);
				}
		main.author = this.people.toString();   

		for(var i in response.data.povCharacters){
				this.characters.push(response.data.povCharacters[i]);
				//console.log(main.people);
				}
		main.charactersPov = this.characters.toString();


		},function errorCallback(reason){
			alert("Error in GET");
		})
	};

	this.booksDetails();

	this.goBack = function(){

	}

	}]) // controller ends
