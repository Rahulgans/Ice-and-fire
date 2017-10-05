
myApp.service("ThroneService",function($http){

	var main = this ;

	this.pageKey = 1 ;

	this.toBookBtn;	

	this.toCharBtn;
	this.toHouseBtn;

	
	this.baseUrl= "https://anapioficeandfire.com/api";
	
	this.booksDetailsApi = function(item){

		return $http.get(main.baseUrl+"/books/"+item);
	}

	this.booksApi = function(size){

		return $http.get(main.baseUrl+"/books/?page=1&pageSize="+size);
	}


	this.characters_houses_Api = function(type,value){
	
		
		return $http.get(main.baseUrl+"/"+type+"/?page="+value+"&pageSize=15");
	}

	this.charactersDetailsApi = function(item){

		return $http.get(main.baseUrl+"/characters/"+item);
	}

	this.housesDetailsApi = function(item){

		return $http.get(main.baseUrl+"/houses/"+item);
	}



})