// Function to validate the username and password

function validate() {
  let uname = JSON.parse(localStorage.getItem("username")) || [];
  let pword = JSON.parse(localStorage.getItem("password")) || [];

  let inputUsername = document.getElementsByName("uname")[0].value;
  let inputPassword = document.getElementsByName("psw")[0].value;

  // Check if username is empty
  if (inputUsername.trim() === "") {
    alert("Username cannot be empty");
    return false;
  }

  // Check if password is empty &  checks if the password meets the parameters
  if (inputPassword.trim() === "") {
    alert("Password cannot be empty");
    return false;
  }

  // Check if username and password match the values set during signup

  let i = 0;
  let user = uname.length;
  let pass = pword.length;
  while (i < user && i < pass) {
    if (inputUsername == uname[i] && inputPassword == pword[i]) {
      alert("Login successful");
      window.location = "../home.html"; // Redirect to home page
      return true;
    }
    i = i + 1;
  }

  alert("Username or Password is invalid. Please try again.");
  window.location = "../Login-Signup-System/login_page.html";
  return false;
}
