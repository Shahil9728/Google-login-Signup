function onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();

    console.log("hello");

    // $(".data").css("display","block");
    $(`#name`).text(profile.getName());
    $(`#email`).text(profile.getEmail());
    $(`#image`).attr('src',profile.getImageUrl());
   
    // $(".g-signin2").css("display","none");
    
    console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
    console.log('Name: ' + profile.getName());
    console.log('Image URL: ' + profile.getImageUrl());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
}

function signOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function () {
        alert('You have been signed out successfully');
        // $(".data").css("display","none");
        // $(".g-signin2").css("display","block");
    });
  }


function ghatiya() {
    console.log("Hello Shahil It is clciked");
}
