 // Function to validate the username and password
 function validate() {
    var inputUsername
    var inputPassword
    inputUsername = document.getElementsByName("uname")[0].value;
    inputPassword = document.getElementsByName("psw")[0].value;

    // Check if username is empty&  checks if the password meets the parameters
    if(inputUsername.trim() === "") {
        alert("Username cannot be empty");
        window.location = "login_page.html"; // Redirect to login page
        return false;
    }
    if(inputUsername.length <= 3) {
        alert("Username must have 4 or more letters");
        window.location = "login_page.html"; // Redirect to login page
        return false;
    }


    // Check if password is empty &  checks if the password meets the parameters
    if(inputPassword.trim() === "") {
        alert("Password cannot be empty");
        window.location = "login_page.html"; // Redirect to login page
        return false;
    } 
    if (inputPassword.length <= 8 || /\s/.test(inputPassword) || !/\d/.test(inputPassword) || !/[A-Z]/.test(inputPassword)) {
        alert("Username or Password is invalid. Please try again.");
        window.location = "login_page.html"; // Redirect to login page
        return false;
    }

    // Check if username and password match the values set during signup
    if (inputUsername == localStorage.getItem("username") && inputPassword == localStorage.getItem("password")) {
      alert("Login successful");
      window.location = "home.html"; // Redirect to home page
      return true;
    }

     else {
        alert("Username or Password is invalid. Please try again.");
        window.location = "login_page.html"; // Redirect to login page  
        return false
    }

  }