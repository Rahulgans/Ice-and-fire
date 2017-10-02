

 	myApp.config(["$routeProvider",function($routeProvider){
            $routeProvider
            .when("/",{
              templateUrl : "views/intro-view.html",
              controller : "MainController",
              controllerAs : "mainCtrl"
            })

            .when("/books/:id1",{
              templateUrl : "views/book-detail-view.html",
              controller : "BookDetailsController",
              controllerAs : "bookCtrl"
            })

             .when("/characters/:id2",{
              templateUrl : "views/characters-detail-view.html",
               controller : "CharDetailsController",
              controllerAs : "charCtrl"
            })

             .when("/houses/:id3",{
              templateUrl : "views/house-detail-view.html",
               controller : "HouseDetailsController",
              controllerAs : "houseCtrl"
            })



			.otherwise(
                {
                   redirectTo:'/'
                          
                 }
               );
          }]);