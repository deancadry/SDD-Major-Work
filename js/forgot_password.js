function validateFP() {

    var storedUsername;
    var storedPassword;
    var storedEmail;
    var storedUID;
    var inputUsername;
    var inputPassword
    var inputPasswordRepeat;
    var inputEmail;
    var inputUID;

    //get stored values from localStorage
    storedUsername = localStorage.getItem("username");
    storedPassword = localStorage.getItem("password");
    storedEmail = localStorage.getItem("email");
    storedUID = localStorage.getItem("userId");

    // get inputted values from the .html page
    inputUsername = document.getElementsByName("uname")[0].value;
    inputEmail = document.getElementsByName("email")[0].value;
    inputUID = document.getElementsByName("userID")[0].value;
    inputPassword = document.getElementsByName("pwrd")[0].value;
    inputPasswordRepeat = document.getElementsByName("confirmPwrd")[0].value;

    // Check if password meets the criteria
 if (inputPassword.length <= 8 || /\s/.test(inputPassword) || !/\d/.test(inputPassword) || !/[A-Z]/.test(inputPassword)){
    alert("Password must be longer than 8 characters, contain no spaces, have at least one number and one capitalized letter");
    window.location = "../Login-Signup-System/forgot_password.html"; // Redirect to back to sign up page
    pwordValid = false;
    return false;
 }
 // Check if the password entered is the same as the one stored
    if (storedPassword === inputPassword){
        alert("The password you have entered has been used before, please enter a new password");
        window.location = "../Login-Signup-System/forgot_password.html"; // Redirect back to forgot_password.html
        return false;
    }

    //validate if all the inputted values are the same as the stored ones, then update password
    if (storedUsername != inputUsername || storedEmail != inputEmail || storedUID != inputUID || inputPassword != inputPasswordRepeat ) {
        alert("One or more of your entries didnt match the stored values. Please retry");
        window.location = "../Login-Signup-System/forgot_password.html";
        return false;
    }

    else {
        localStorage.removeItem("password");
        localStorage.setItem("Password", inputPassword);
    alert("Your password has been updated, please sign in again.");
    window.location = "../Login-Signup-System/login_page.html";
    return true;

    }
    
}