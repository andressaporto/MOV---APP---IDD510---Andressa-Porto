// Page 2 - Sign in page

$( document ).ready(function() {
    // DOM ready

    // Test data
    /*
     * To test the script you should discomment the function
     * testLocalStorageData and refresh the page. The function
     * will load some test data and the loadProfile
     * will do the changes in the UI
     */
    // testLocalStorageData();
    // Load profile if it exits
    loadProfile();
});

/**
 * Function that gets the data of the profile in case
 * thar it has already saved in localstorage. Only the
 * UI will be update in case that all data is available
 *
 * A not existing key in localstorage return null
 *
 */
function getLocalProfile(callback){
    var profileImgSrc      = localStorage.getItem("PROFILE_IMG_SRC");
    var profileName        = localStorage.getItem("PROFILE_NAME");
    var profileReAuthEmail = localStorage.getItem("PROFILE_REAUTH_EMAIL");

    if(profileName !== null
            && profileReAuthEmail !== null
            && profileImgSrc !== null) {
        callback(profileImgSrc, profileName, profileReAuthEmail);
    }
}

/**
 * Main function that load the profile if exists
 * in localstorage
 */
function loadProfile() {
    if(!supportsHTML5Storage()) { return false; }
    // we have to provide to the callback the basic
    // information to set the profile
    getLocalProfile(function(profileImgSrc, profileName, profileReAuthEmail) {
        //changes in the UI
        $("#profile-img").attr("src",profileImgSrc);
        $("#profile-name").html(profileName);
        $("#reauth-email").html(profileReAuthEmail);
        $("#inputEmail").hide();
        $("#remember").hide();
    });
}

/**
 * function that checks if the browser supports HTML5
 * local storage
 *
 * @returns {boolean}
 */
function supportsHTML5Storage() {
    try {
        return 'localStorage' in window && window['localStorage'] !== null;
    } catch (e) {
        return false;
    }
}

/**
 * Test data. This data will be safe by the web app
 * in the first successful login of a auth user.
 * To Test the scripts, delete the localstorage data
 * and comment this call.
 *
 * @returns {boolean}
 */
function testLocalStorageData() {
    if(!supportsHTML5Storage()) { return false; }
    localStorage.setItem("PROFILE_IMG_SRC", "//lh3.googleusercontent.com/-6V8xOA6M7BA/AAAAAAAAAAI/AAAAAAAAAAA/rzlHcD0KYwo/photo.jpg?sz=120" );
    localStorage.setItem("PROFILE_NAME", "César Izquierdo Tello");
    localStorage.setItem("PROFILE_REAUTH_EMAIL", "oneaccount@gmail.com");
}

/* Page 3 - google maps */

function myMap() {
var mapProp= {
    center:new google.maps.LatLng(40.015934, -75.192855),
    zoom:15,
};
var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);
}

// This example adds a marker to indicate the position of Maricá in Rio de Janeiro,
      // Brazil.
      function mymap() {
        var map = new google.maps.LatLng(document.getElementById('map'), {
          zoom: 10,
          center: {lat: 40.015934, lng: -75.192855}
        });

        var image = 'https://static.getjar.com/icon-50x50/2e/943456_thm.png';
        var beachMarker = new google.maps.LatLng({
          position: {lat: 40.015, lng: -75.192},
          map: map,
          icon: image
        });
      }

     /* Page 9 - List: add + delete items */



      /* Page 11 upload image*/

      $('#BSbtndanger').filestyle({
				buttonName : 'btn-danger',
                buttonText : ' File selection'
			});
			$('#BSbtnsuccess').filestyle({
				buttonName : 'btn-success',
                buttonText : ' Open'
			});
			$('#BSbtninfo').filestyle({
				buttonName : 'btn-info',
                buttonText : ' Select a File'
			});


/*Page 15 Toggle*/

$(function() {

    $('#title-toggle').click(function() {
        $(this).next('#coin1').toggle();
    });

});
