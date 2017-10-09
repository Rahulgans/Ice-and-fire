
myApp.controller("MainController",["$http","ThroneService",function($http,ThroneService){

	var main = this;
	this.baseUrl ="https://anapioficeandfire.com/api";

	 this.allData=[];
	 this.noOfElements = 20;
	
	this.bookData  = {};
	this.charData  = {};
	this.houseData = {};

	this.value1 = false ;  // SHOW/HIDE ALL DETAILS

	this.value2 = false ;  //  SHOW/HIDE BOOK

	this.value3 = false ;  //  SHOW/HIDE CHARACTER

	this.value4 = false ;  // SHOW/HIDE HOUSE
	
	this.nextKey1 = 1; // FOR TRAVERSING PAGES IN CHARACTERS

	this.nextKey2 = 1; // FOR TRAVERSING PAGES IN HOUSES

	this.sortAllKey = false; // SORT FOR ALL DETAILS
	this.sortKey1 = false;
	this.sortKey2 = false;
	this.sortKey3 = false;

	this.viewMore = function () {   //FOR LOADING MORE DATA
   		
   		 main.noOfElements += 20;  
	 
	};



	this.allBooks = function(){

		ThroneService.booksApi(12)
		.then(function successCallback(response){
			
		main.bookData = response.data ;
		main.allData.push.apply(main.allData,main.bookData);
		//console.log(main.bookData);

		},function errorCallback(reason){
		alert("Error in GET");
		})
	};

 	this.allBooks();
  
   this.allHouses = function(){
    
   		for(var i=1;i<25;i++){
      		ThroneService.housesAllApi(i)
      		.then(function successCallback(response) {         
          		
              	main.allData.push.apply(main.allData,response.data);


        	}, function errorCallback(reason) {
          
            alert("some error occurred. Check the console.");
          
        	});
    	}

 	}// end of all houses

   this.allHouses();
   

    this.allCharacters = function(){
   
  		for(var i=1;i<50;i++){
 		   ThroneService.charactersAllApi(i)
  		   .then(function successCallback(response) {
      
          		
              		main.allData.push.apply(main.allData,response.data);
            		console.log(main.allData);
                 
                             
          	}, function errorCallback(response) {
              
                alert("Error in GET");
              
            });
       	}
  	}; //  End of allCharacters

  	this.allCharacters();
                   

	this.allShowHide = function(){   // For hiding and showing on LIST-ALL click

		main.value1 =! main.value1;
		main.value2 = false;
		main.value3 = false;
		main.value4 = false;
	};


 	this.booksShowHide = function(){   // For hiding and showing on books click
		
		main.value2 =! main.value2;
		main.value1 = false;
		main.value3 = false;
		main.value4 = false;
	
	};


	this.loadChar = function(){        // For loading characters  seperately	
	
		ThroneService.characters_houses_Api("characters",1)
		.then(function successCallback(response){
			
			main.charData = response.data;
		
		},function errorCallback(reason){
		alert("Error in GET");
		})
		
	};

 	this.loadChar();

 	this.charsShowHide = function(){   // For hiding and showing on characters click

 		main.value3 =! main.value3;

 		if(main.value3 == true){    // while coming back to characters after some other card, always dispaly from first page

			ThroneService.characters_houses_Api("characters",1)
			.then(function successCallback(response){
		
			main.houseData = response.data;
		
			},function errorCallback(reason){
				alert("Error in GET");
			})
		}
		main.value1 = false;
		main.value2 = false;
		main.value4 = false;
 	};


 	this.nextFunc = function(type){     //  Function when called displays next page's data
	
	
		if (type === "characters"){

			main.nextKey1 += 1;

			ThroneService.characters_houses_Api("characters",main.nextKey1)
			.then(function successCallback(response){
		
			main.charData = response.data;
		
			},function errorCallback(reason){
				alert("Error in GET");
			})
		}

		else{

			main.nextKey2 += 1;
			
			ThroneService.characters_houses_Api("houses",main.nextKey2)
			.then(function successCallback(response){
		
				main.houseData = response.data; ;
		
			},function errorCallback(reason){
				alert("Error in GET");
			})

		} // else ends

	}; // nextFunc ends

	this.prevFunc = function(type){     // Function when called displays previous page's data
	

		if (type === "characters"){


			if(main.nextKey1 > 1){	
				main.nextKey1 -= 1;
				//	console.log(main.nextKey1);
			}
		
			ThroneService.characters_houses_Api("characters",main.nextKey1)
			.then(function successCallback(response){
		
				main.charData = response.data;
		
			},function errorCallback(reason){
				alert("Error in GET");
			})
		}

		else{

			if(main.nextKey2 > 1){	
				main.nextKey2 -= 1;
			}
			
		ThroneService.characters_houses_Api("houses",main.nextKey2)
		.then(function successCallback(response){
		
	
		main.houseData = response.data; ;
			
		},function errorCallback(reason){
			alert("Error in GET");
		})

		} // else ends

	}; // prevFunc ends
   


	this.loadHouses = function(){       // For loading Houses seperately

		ThroneService.characters_houses_Api("houses",1)
		.then(function successCallback(response){
	
			main.houseData = response.data ;

			main.allData.push.apply(main.allData,main.houseData);

			// console.log(main.houseData);


		},function errorCallback(reason){
			alert("Error in GET");
		})
	};

 	this.loadHouses();

	this.housesShowHide = function(){    // For hiding and showing on houses click

		main.value4 =! main.value4;

		

		if(main.value4 == true){      // while coming back to Houses after some other card, always dispaly from first page

			ThroneService.characters_houses_Api("houses",1)
			.then(function successCallback(response){
		
			main.houseData = response.data;
		
			},function errorCallback(reason){
				alert("Error in GET");
			})
		}

		main.value1 = false;
		main.value2 = false;
		main.value3 = false;
	//	console.log(main.value4);
		
	};
		
}]) 