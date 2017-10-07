
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


	this.booksApi = function(size){            //  FOR BOOKS

		return $http.get(main.baseUrl+"/books/?page=1&pageSize="+size);
	}

	this.housesAllApi = function(value){  // FOR ALL HOUSES DATA

		return $http.get(main.baseUrl+"/houses/?page="+value+"&pageSize=20");
	}

	this.charactersAllApi = function(value){   // FOR ALL CHARACTERS DATA

		return $http.get(main.baseUrl+"/characters/?page="+value+"&pageSize=20");
	}
	
	this.characters_houses_Api = function(type,value){   // FOR CHARACTERS AND HOUSES COMBINED 
	
		
		return $http.get(main.baseUrl+"/"+type+"/?page="+value+"&pageSize=15");
	}

	this.charactersDetailsApi = function(item){        // CHARACTER-DETAILS

		return $http.get(main.baseUrl+"/characters/"+item);
	}

	this.housesDetailsApi = function(item){           // HOUSE DETAILS

		return $http.get(main.baseUrl+"/houses/"+item);
	}



})