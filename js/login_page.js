 // Function to validate the username and password

   

 function validate() {

    let uname = JSON.parse(localStorage.getItem("username"));
    let pword = JSON.parse(localStorage.getItem("password"));

    let inputUsername = document.getElementsByName("uname")[0].value;
    let inputPassword = document.getElementsByName("psw")[0].value;


    // Check if username is empty&  checks if the password meets the parameters
    if(inputUsername.trim() === "") {
        alert("Username cannot be empty");
        window.location = "../Login-Signup-System/login_page.html"; // Redirect to login page
        return false;
    }
    // if(inputUsername.length <= 3) {
    //     alert("Username must have 4 or more letters");
    //     window.location = "../Login-Signup-System/login_page.html"; // Redirect to login page
    //     return false;
    // }


    // Check if password is empty &  checks if the password meets the parameters
    if(inputPassword.trim() === "") {
        alert("Password cannot be empty");
        window.location = "../Login-Signup-System/login_page.html"; // Redirect to login page
        return false;
    } 
    // if (inputPassword.length <= 8 || /\s/.test(inputPassword) || !/\d/.test(inputPassword) || !/[A-Z]/.test(inputPassword)) {
    //     alert("Username or Password is invalid. Please try again.");
    //     window.location = "../Login-Signup-System/login_page.html"; // Redirect to login page
    //     return false;
    // }

    // Check if username and password match the values set during signup

    for (let i = 0; i <= uname.length; i++) {
        if (inputUsername == uname[i] && inputPassword == pword[i]) {
            alert("Login successful");
            window.location = "../home.html"; // Redirect to home page
            return true;
        }
        else{
            alert("Username or Password is invalid. Please try again.");
            window.location = "../Login-Signup-System/login_page.html"; // Redirect to login page
            return false;

            
        };
    }
    // if (inputUsername == localStorage.getItem("username") && inputPassword == localStorage.getItem("password")) {
    //   alert("Login successful");
    //   window.location = "../home.html"; // Redirect to home page
    //   return true;
    // }

    //  else {
    //     alert("Username or Password is invalid. Please try again.");
    //     window.location = "../Login-Signup-System/login_page.html"; // Redirect to login page  
    //     return false
    // }

  }