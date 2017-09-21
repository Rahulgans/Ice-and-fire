
myApp.controller("BooksController",["$http",function($http){

	var main = this;
	this.baseUrl ="https://anapioficeandfire.com/api";

	this.loadAPI = function(){
	$http({
		method:"GET",
		url: main.baseUrl+"/books"
	})
	.then(function successCallback(response){

		console.log(response);
	},function errorCallback(reason){
		alert("Error in GET");
	})
};
this.loadAPI();

}])