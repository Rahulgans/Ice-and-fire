myApp.directive("toTop",function(){

		return{

			restrict : "E",
			template : "<div class='move-top'><span><i class='icon-hand-up'></i></span></div>",
			link : function ($scope,element,attrs){

				$(window).scroll(function(){

					if ($(window).scrollTop() <= 200) {
							$(element).fadeOut();
					}
					
					else {
						$(element).fadeIn();
					}

				});

				$(element).on('click', function(){
					$('html, body').animate({ scrollTop: 0 }, 'slow');
				
				});
			}
		}
	})