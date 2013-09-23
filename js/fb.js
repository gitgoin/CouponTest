$(document).ready(function () {

	// start variables //

    var container;
    var nonFanContent;
    var fanContent;
	
	// end variables //
	
	// start ajax requests //

    $.get('nonfancontent.php', function (data) {

        container = $('<div />').html(data);
        container.children().not('#container').remove();
        nonFanContent = container.html();

        $.get('fancontent.php', function (data) {

            container = $('<div />').html(data);
            container.children().not('#container').remove();
            fanContent = container.html();
			
			// start checkStatus() //

            function checkStatus() {

                FB.getLoginStatus(function (response) {
                    if (response.status === 'connected') { // user logged into fb + auth

                        $("#content").html(fanContent);

                        //var uid = response.authResponse.userID;
                        //var accessToken = response.authResponse.accessToken;
						
                    } else if (response.status === 'not_authorized') { // user logged into fb but no auth

                        $("#content").html(nonFanContent);

                    } else { // user not logged into fb
                        
                        $("#content").html(nonFanContent);
                        
                    }

                }, true);


            };
			
			checkStatus(); // initialize checkStatus()
			
			// end checkStatus() //
			
			// start showAuth() //

            function showAuth() {

                FB.login(function (response) {
					
					window.location.reload(true); // force page reload after auth
                   
				   /* if (response.authResponse) {
                          FB.api('/me', function (response) {
			
                        });
                    } else {
                        
                    }*/
					
                }, true);

            };
			
			// end showAuth() //
			
			// start "like" function //

            FB.Event.subscribe('edge.create',
                function (response) {

                    showAuth();

                }
            );
			
			// end "like" function //

			// start "subscribe" function //

            $("#sub").click(function () {

                showAuth();

            });
			
			// end "subscribe" function //

$.getScript("js/products.js");

        });
    });
	
	// end ajax requests //

});
