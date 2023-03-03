function handleCredentialResponse(response) {
  // Check if the user is signed in
  if (response.credential) {
      // User is signed in
      const credential = response.credential;
      console.log(credential);
      const profile = JSON.parse(atob(credential.split('.')[1]));
      console.log(profile);
      const name = profile.name
      console.log("ID: " + profile.sub);
      console.log('Full Name: ' + profile.name);
      console.log('Given Name: ' + profile.given_name);
      console.log('Family Name: ' + profile.family_name);
      console.log("Image URL: " + profile.picture);
      console.log("Email: " + profile.email);

      load(profile);

  } else {
      // User is not signed in
      console.log('User is not signed in');
  }
}

function load(profile)
{
  const data = document.querySelector('.data');
  data.style.display = 'block';
  const gbtn = document.querySelector('.g_id_signin');
  gbtn.style.display = 'none';
  const name = document.getElementById('name')
  name.textContent = profile.name;
  const email = document.getElementById('email')
  email.textContent = profile.email
  const img = document.getElementById('image')
  img.src = profile.picture;
}
