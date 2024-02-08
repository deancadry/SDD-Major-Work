function test() {
    // Declaring variables, outside of the function so that console.log can access them
    var inputUsername;
    var inputPassword;
    var inputPhone;
    var inputEmail;
    var userId;
    unameValid = true;
    pwordValid = true; 
    phoneValid = true;
    emailValid = true;  
    
      // Get the input values
        inputUsername = document.getElementsByName("uname")[0].value;
        inputPassword = document.getElementsByName("psw")[0].value;
        inputPhone = document.getElementsByName("phonenum")[0].value;
        inputEmail = document.getElementsByName("email")[0].value;
      //Generate unique ID for the new user
    userId = Math.floor(Math.random() * 1000000); // Creates a value between 0 --> 999999, 




// Check if username has more than 4 letters
if (inputUsername.length <= 3) {
    alert("Username must have 4 or more letters");
    window.location = "../Login-Signup-System/signup_page.html"; // Redirect to back to sign up page
    unameValid = false;
    return false;

}

// Check if password meets the criteria
 if (inputPassword.length <= 8 || /\s/.test(inputPassword) || !/\d/.test(inputPassword) || !/[A-Z]/.test(inputPassword)){
     alert("Password must be longer than 8 characters, contain no spaces, have at least one number and one capitalized letter");
     window.location = "../Login-Signup-System/signup_page.html"; // Redirect to back to sign up page
     pwordValid = false;
     return false;

 }

// Check if PhoneNum is meets the cirtieria 
 if ((/\s/).test(inputPhone) || /-/.test(inputPhone)) { 
     alert("Phone Number must be 10 numbers, no spaces or dashes");
    window.location = "../Login-Signup-System/signup_page.html"; // Redirect to back to sign up page
     phoneValid = false;
     return false;
}

 //Check if Email is empty
 if (inputEmail.trim() === "" || !inputEmail.includes("@") || !inputEmail.includes(".")) {
    alert("Invalid email address");
     window.location = "../Login-Signup-System/signup_page.html"; // Redirect to back to sign up page
     emailValid = false;
     return false;
 }

console.log(inputUsername);
console.log(inputPassword);
console.log(inputPhone);
console.log(inputEmail);
console.log(userId);



if (unameValid != false && pwordValid != false && phoneValid != false && emailValid != false) { // are all the booleans === true?
     alert("Login successful");
     alert("Your user ID is " + userId + " please keep this number safe");
   localStorage.setItem("username", inputUsername);
   localStorage.setItem("password", inputPassword);
   localStorage.setItem("phone", inputPhone);
   localStorage.setItem("email", inputEmail);
   localStorage.setItem("userId", userId);
   window.location = "../Login-Signup-System/login_page.html"; // Redirect to home page
   return true;

}


if ( unameValid == false || pwordValid == false || phoneValid == false || emailValid == false) { // are the booleans === false
alert("Login failed");
window.location = "../Login-Signup-System/signup_page.html"; // Redirect to sign up page
return false;
}
}