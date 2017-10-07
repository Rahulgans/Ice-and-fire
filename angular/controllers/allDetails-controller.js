myApp.controller('allDetailsController',['$http','ThroneService',function($http,ThroneService) {


  var main = this;
  this.houses=[];
  this.character=[];
  this.allData=[];

  this.value1 = false;
  this.noOfElements = 20;

  this.viewMore = function () {
    main.noOfElements += 20;  
  };


  

  this.allBooks = function(){


     ThroneService.booksApi(12)
      .then(function successCallback(response) {
          // this callback will be called asynchronously
          // when the response is available
        //  console.log(response.data);

          main.allData.push.apply(main.allData,response.data);



        }, function errorCallback(response) {
            
            alert("Error in GET");
        
        });


  }// end all Books
  this.allBooks();
  
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

 

 



                    
}]); // end controller
