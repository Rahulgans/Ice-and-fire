
myApp.controller("MainController",["$http","ThroneService","$timeout",function($http,ThroneService,$timeout){

	var main = this;
	this.baseUrl ="https://anapioficeandfire.com/api";

	 this.allData=[];
	 this.noOfElements = 30;

	 this.viewMore = function () {
    main.noOfElements += 30;  
	 
	  };

	
	this.bookData = {};
	this.charData= {};
	this.houseData={};

	this.value1 = false ;  // show/hide for List all

	this.value2 = false ;  // show/hide for books

	this.value3 = false ;  //show/hide for characters

	this.value4 = false ;  // show/hide for houses
	
	this.nextKey1 = 1; // For traversing pages in Characters
	this.nextKey2 = 1; // For traversing pages in Houses
 
	this.check1 = 1 ;
	this.check2 = 1;

	this.sortAllKey = false; // Sort For all details
	this.sortKey1 = false;
	this.sortKey2 = false;
	this.sortKey3 = false;



	this.allBooks = function(){

		ThroneService.booksApi(12)
		.then(function successCallback(response){
	//	 console.log(response.data);
			
		main.bookData = response.data ;
		main.allData.push.apply(main.allData,main.bookData);
		console.log(main.bookData);

		
	},function errorCallback(reason){
		alert("Error in GET");
	})
};

 this.allBooks();
  
   this.allHouses = function(){
    
   for(var i=1;i<12;i++){
      ThroneService.housesAllApi([i])
      .then(function successCallback(response) {
         
          if(response.data.length>0){
              main.allData.push.apply(main.allData,response.data);
         
                  }
         


        }, function errorCallback(reason) {
          
            alert("some error occurred. Check the console.");
          
        });
    }

  }// end of all houses

   this.allHouses();
   

    this.allCharacters = function(){
   
  		 for(var i=1;i<50;i++){
 		   ThroneService.charactersAllApi([i])
  		    .then(function successCallback(response) {
         
    //      console.log(response.data);
      
          if(response.data.length>0){
              main.allData.push.apply(main.allData,response.data);
            //  console.log(main.allData);
                  }
                 
            
          }, function errorCallback(response) {
              
                alert("Error in GET");
              
            });
       }
  }; //  End of allCharacters

  this.allCharacters();
                   


 this.booksShowHide = function(){   // For hiding and showing on books click
		
		main.value2 =! main.value2;
		main.value1 = false;
		main.value3 = false;
		main.value4 = false;
	
	}


this.loadChar = function(){        // For loading characters  seperately	
	
		ThroneService.characters_houses_Api("characters",1)
		.then(function successCallback(response){
		console.log(response.data);

		main.charData = response.data;
		
	},function errorCallback(reason){
		alert("Error in GET");
	})
		

};

 this.loadChar();

 this.charsShowHide = function(){   // For hiding and showing on characters click

 		main.value3 =! main.value3;
		main.value1 = false;
		main.value2 = false;
		main.value4 = false;
 }


 this.nextFunc = function(type){     //  Function when called displays next page's data
	
	
	if (type === "characters"){

		main.nextKey1 += 1;
		main.check1 += 1;
//	console.log(main.nextKey1);
	
	
	ThroneService.characters_houses_Api("characters",main.nextKey1)
		.then(function successCallback(response){
		
	
		main.charData = response.data;
		
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

		 console.log(main.houseData);


	},function errorCallback(reason){
		alert("Error in GET");
	})
};

 this.loadHouses();

	this.housesShowHide = function(){    // For hiding and showing on houses click

		main.value4 =! main.value4;
		console.log(main.value4);
		main.value1 = false;
		main.value2 = false;
		main.value3 = false;
	};
		
}]) 