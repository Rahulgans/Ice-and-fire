
myApp.directive("booksDir",function(){

	return {

		restrict : "E" ,
		templateUrl : "views/book-template.html",
		controller : function($scope){	
		
		}
	}
})

myApp.directive("charactersDir",function(){

	return{

		restrict : "E" ,
		templateUrl : "views/char-template.html",
		controller : function($scope){
		
		}

	}
})

myApp.directive("housesDir",function(){

	return{

		restrict : "E" ,
		templateUrl : "views/house-template.html",
		controller : function($scope){
			
		}
	}
})