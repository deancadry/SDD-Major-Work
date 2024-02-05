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
        alert("Password must be longer than 8 characters, contain no spaces, have at least one number and one capitalized letter");
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
        alert("Login failed");
        window.location = "login_page.html"; // Redirect to login page  
        return false
    }

  }