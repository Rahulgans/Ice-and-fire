
myApp.controller("MainController",["$http","ThroneService",function($http,ThroneService){

	var main = this;
	this.baseUrl ="https://anapioficeandfire.com/api";
	this.allData = [];
	this.data1={};
	this.value1 = false;
	this.value2 = false;
	this.value3 = false;
	
	this.nextKey1 = 1; // next btn for characters
	this.nextKey2 = 1; // next btn for houses
 
	this.check1 = 1 ;
	this.check2 = 1;

	this.idHouse = "house";


	this.loadBooks = function(){

		ThroneService.booksApi(12)
		.then(function successCallback(response){
	//	 console.log(response.data);
			
		main.data1["books"] = response.data ;
	//	main.allData.push(main.data1["books"]);
		
	},function errorCallback(reason){
		alert("Error in GET");
	})
};

 this.loadBooks();

 this.booksShowHide = function(){
		
		main.value1 =! main.value1;
		main.value2 = false;
		main.value3 = false;
	//	console.log(main.value1);
	}


this.loadChar = function(){

		
	
		ThroneService.characters_houses_Api("characters",1)
		.then(function successCallback(response){
		//console.log(response.data);

		main.data1["chars"] = response.data; ;
	// console.log(main.data1["chars"]);
			
		
	},function errorCallback(reason){
		alert("Error in GET");
	})
	
};

 this.loadChar();

 this.charsShowHide = function(){
 		main.value2 =! main.value2;
		main.value1 = false;
		main.value3 = false;
	//	console.log(main.value2);
 }


 this.nextFunc = function(type){
	
//	console.log(type);
	
	
	if (type === "characters"){

		main.nextKey1 += 1;
		main.check1 += 1;
//	console.log(main.nextKey1);
	
	//	console.log("type working");
		
	ThroneService.characters_houses_Api("characters",main.nextKey1)
		.then(function successCallback(response){
		
	
		main.data1["chars"] = response.data;
		
	//	console.log(main.data1["chars"]);
		
	},function errorCallback(reason){
		alert("Error in GET");
	})
	}

	else{

		main.nextKey2 += 1;
		main.check2  += 1;
	//	console.log(main.nextKey2);
			
		ThroneService.characters_houses_Api("houses",main.nextKey2)
		.then(function successCallback(response){
		
	
		main.data1["houses"] = response.data; ;
		
	
		
	},function errorCallback(reason){
		alert("Error in GET");
	})

	} // else ends

}; // nextFunc ends

this.prevFunc = function(type){
	
//	console.log(type);
	
	if (type === "characters"){


	if(main.nextKey1 > 1){	
		main.nextKey1 -= 1;
	//	console.log(main.nextKey1);
	}
		
	ThroneService.characters_houses_Api("characters",main.nextKey1)
		.then(function successCallback(response){
		
	
		main.data1["chars"] = response.data;

	//	console.log(main.data1["chars"]);
		
	},function errorCallback(reason){
		alert("Error in GET");
	})
	}

	else{

		if(main.nextKey2 > 1){	
		main.nextKey2 -= 1;
	//	console.log(main.nextKey2);
		}
			
		ThroneService.characters_houses_Api("houses",main.nextKey2)
		.then(function successCallback(response){
		
	
		main.data1["houses"] = response.data; ;
		
	
		
	},function errorCallback(reason){
		alert("Error in GET");
	})

	} // else ends

}; // prevFunc ends
   


this.loadHouses = function(){

		ThroneService.characters_houses_Api("houses",1)
		.then(function successCallback(response){
	
		main.data1["houses"] = response.data ;

		main.allData.push(main.data1);

		// console.log(main.data1);
		
	},function errorCallback(reason){
		alert("Error in GET");
	})
};

 this.loadHouses();

	this.housesShowHide = function(){	
		main.value3 =! main.value3;
		main.value1 = false;
		main.value2 = false;
	//	console.log(main.value3);
	};

//console.log(this.allData);

}])