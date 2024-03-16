function validateFP() {
  alert("getting stored values from the array");

  let storedUsername = JSON.parse(localStorage.getItem("username")) || [];
  alert("storedUname");
  let storedEmail = JSON.parse(localStorage.getItem("email")) || [];
  alert("stored email");

  let storedPassword = JSON.parse(localStorage.getItem("password")) || [];
  alert("stored password");

  // get inputted values from the forgot password page

  let inputUsername = document.getElementById("uname").value;
  let inputEmail = document.getElementById("email").value;
  let inputPassword = document.getElementById("pwrd").value;
  let inputPasswordRepeat = document.getElementById("confirmPwrd").value;

  alert("Check if password meets the criteria");
  if (
    inputPassword.length <= 8 ||
    /\s/.test(inputPassword) ||
    !/\d/.test(inputPassword) ||
    !/[A-Z]/.test(inputPassword)
  ) {
    alert(
      "Password must be longer than 8 characters, contain no spaces, have at least one number and one capitalized letter"
    );
    window.location = "../Login-Signup-System/forgot_password.html"; // Redirect to back to sign up page
    return false;
  }

  alert("checking against array");
  let i = 0;
  let user = storedUsername.length;
  let email = storedEmail.length;
  while (i < user && i < email) {
    if (
      inputUsername == storedUsername[i] &&
      inputEmail == storedEmail[i] &&
      inputPassword == inputPasswordRepeat
    ) {
      alert("in if loop");
      storedPassword.splice(i, 1, inputPassword); // Replace the old password with the new one
      localStorage.setItem("password", JSON.stringify(storedPassword)); // Update the stored password in the localStorage
      alert("Your password has been updated, please sign in again.");
      window.location = "../Login-Signup-System/login_page.html";
      return true;
    } else i++;
  }
  if (inputPassword != inputPasswordRepeat) {
    alert("Passwords do not match");
  }
  if (i == user) {
    alert("Username not found");
  }
  if (i == pass) {
    alert("Password not found");
  }
  if (i == user && i == pass) {
    alert("Username and Password not found");
  }
  alert("else");
  window.location = "../Login-Signup-System/forgot_password.html";
  return false;
}
