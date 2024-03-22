function validateDetails() {
  let inputUsername = document.getElementById("uname").value;
  console.log(inputUsername);
  let inputUserID = document.getElementById("uId").value;
  console.log(inputUserID);
  let username = JSON.parse(localStorage.getItem("username")) || [];
  let uID = JSON.parse(localStorage.getItem("userId")) || [];

  if (inputUsername == "") {
    alert("Name must be filled out");
    return false;
  }

  if (inputUserID == "") {
    alert("User ID must be filled out");
    return false;
  }

  let i = 0;
  let user = username.length;
  let id = uID.length;
  while (i < user && i < id) {
    if (inputUsername == username[i] && inputUserID == uID[i]) {
      alert("Login successful");
      sessionStorage.setItem("sUsername", inputUsername);
      window.location = "ProfilesSuccess.html";
      return true;
    }
    i = i + 1;
  }
  alert("Username or Password is invalid. Please try again.");
  window.location = "Profile.html";
  return false;
}
