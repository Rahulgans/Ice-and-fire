
	myApp.directive("booksDir",function(){

		return {

			restrict : "E" ,
			templateUrl : "views/book-template.html",
			controller : function($scope){	
		
		}
	}})


	myApp.directive("charactersDir",function(){

		return{

			restrict : "E" ,
			templateUrl : "views/char-template.html",
			controller : function($scope){
		
		}

	}})


	myApp.directive("housesDir",function(){

		return{

			restrict : "E" ,
			templateUrl : "views/house-template.html",
			controller : function($scope){
			
		}
	}})


	myApp.directive("toTop",function(){

		return{

			restrict : "E",
			replace : true,
			template : "<span class='move-top fa-stack fa-lg'><i class='fa fa-square-o fa-stack-2x'></i><i class='fa fa-hand-o-up fa-stack-1x fa-inverse'></i></span>",
			link : function ($scope,element,attrs){

				$(window).scroll(function(){

					if ($(window).scrollTop() > 500) {
							$(element).fadeIn();
					}
					
					else{
						$(element).fadeOut();
					}

				});

				$(element).on('click', function(){
					$('html, body').animate({ scrollTop: 50 }, 'slow');
				
				});
			}
		}
	})