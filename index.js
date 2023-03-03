// function onSignIn(googleUser) {
//     var profile = googleUser.getBasicProfile();

//     console.log("hello");

//     // $(".data").css("display","block");
//     $(`#name`).text(profile.getName());
//     $(`#email`).text(profile.getEmail());
//     $(`#image`).attr('src',profile.getImageUrl());

//     // $(".g-signin2").css("display","none");

//     console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
//     console.log('Name: ' + profile.getName());
//     console.log('Image URL: ' + profile.getImageUrl());
//     console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
// }

// onSignIn(googleUser);

// function signOut() {
//     var auth2 = gapi.auth2.getAuthInstance();
//     auth2.signOut().then(function () {
//         alert('You have been signed out successfully');
//         // $(".data").css("display","none");
//         // $(".g-signin2").css("display","block");
//     });
//   }


// function ghatiya() {
//     console.log("Hello Shahil It is clciked");
// }




// Replace with your own client ID and API key
var CLIENT_ID = '1096017603369-ek5jfhs8qa8k8uvsj0keinos9406c8rq.apps.googleusercontent.com';
var API_KEY = 'AIzaSyBtI4UlnOVd0avOd0VPR-g_JIqvv8iNCSw';

// Load the Google API client library
gapi.load('client:auth2', initAuth);

function initAuth() {

    console.log("In gapi inti");
    // Initialize the Google API client with your API key and client ID
    gapi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"],
        scope: 'https://www.googleapis.com/auth/calendar.events'
    }).then(function () {
        // Set up the Google Login button
        gapi.signin2.render('google-login-button', {
            'scope': 'profile email',
            'width': 240,
            'height': 50,
            'longtitle': true,
            'theme': 'light',
            'onsuccess': onSignIn,
            'onfailure': onFailure
        });
    });
}

function onSignIn(googleUser) {
    // Get the user's ID token and basic profile information
    var idToken = googleUser.getAuthResponse().id_token;
    var profile = googleUser.getBasicProfile();

    // Display the user's name and email address
    document.getElementById('user-name').textContent = profile.getName();
    document.getElementById('user-email').textContent = profile.getEmail();

    // TODO: Send the ID token to your server to authenticate the user
}

function onFailure(error) {
    console.log(error);
}
