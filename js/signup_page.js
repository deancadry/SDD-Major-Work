function test() {
  // Get the input values
  let inputUsername = document.getElementById("User").value;
  let inputPassword = document.getElementById("Pass").value;
  let inputPhone = document.getElementById("phone").value;
  let inputEmail = document.getElementById("em-ail").value;
  //Generate unique ID for the new user
  unameValid = true;
  pwordValid = true;
  phoneValid = true;
  emailValid = true;

  let username = JSON.parse(localStorage.getItem("username")) || [];
  let password = JSON.parse(localStorage.getItem("password")) || [];
  let phone = JSON.parse(localStorage.getItem("phone")) || [];
  let email = JSON.parse(localStorage.getItem("email")) || [];
  let userId = JSON.parse(localStorage.getItem("userId")) || [];

  let inputUserId = userId.length + 1;

  // Check if username has more than 4 letters
  if (inputUsername.length <= 3) {
    alert("Username must have 4 or more letters");
    window.location = "../Login-Signup-System/signup_page.html"; // Redirect to back to sign up page
    unameValid = false;
    return false;
  }

  // Check if password meets the criteria
  if (
    inputPassword.length <= 8 ||
    /\s/.test(inputPassword) ||
    !/\d/.test(inputPassword) ||
    !/[A-Z]/.test(inputPassword)
  ) {
    alert(
      "Password must be longer than 8 characters, contain no spaces, have at least one number and one capitalized letter"
    );
    window.location = "../Login-Signup-System/signup_page.html"; // Redirect to back to sign up page
    pwordValid = false;
    return false;
  }

  // Check if PhoneNum is meets the cirtieria
  if (/\s/.test(inputPhone) || /-/.test(inputPhone)) {
    alert("Phone Number must be 10 numbers, no spaces or dashes");
    window.location = "../Login-Signup-System/signup_page.html"; // Redirect to back to sign up page
    phoneValid = false;
    return false;
  }

  //Check if Email is empty
  if (
    inputEmail.trim() === "" ||
    !inputEmail.includes("@") ||
    !inputEmail.includes(".")
  ) {
    alert("Invalid email address");
    window.location = "../Login-Signup-System/signup_page.html"; // Redirect to back to sign up page
    emailValid = false;
    return false;
  }

  if (
    unameValid != false &&
    pwordValid != false &&
    phoneValid != false &&
    emailValid != false
  ) {
    // are all the booleans === true?
    alert("Your user ID is " + inputUserId + " please keep this number safe");
    push(
      username,
      password,
      phone,
      email,
      userId,
      inputUsername,
      inputPassword,
      inputPhone,
      inputEmail,
      inputUserId
    ); // allows the function access to these variables <--

    alert("You have successfully signed up");
    window.location = "../Login-Signup-System/login_page.html"; // Redirect to home page
    return true;
  }

  if (
    unameValid == false ||
    pwordValid == false ||
    phoneValid == false ||
    emailValid == false
  ) {
    // are the booleans === false
    alert("Login failed");
    window.location = "../Login-Signup-System/signup_page.html"; // Redirect to sign up page
    return false;
  }
}

function push(
  username,
  password,
  phone,
  email,
  userId,
  inputUsername,
  inputPassword,
  inputPhone,
  inputEmail,
  inputUserId
) {
  console.log(
    username +
      password +
      phone +
      email +
      userId +
      inputUsername +
      inputPassword +
      inputPhone +
      inputEmail +
      inputUserId
  );

  if (
    username.length == password.length &&
    password.length == phone.length &&
    phone.length == email.length &&
    email.length == userId.length
  ) {
    alert("Adding values to array and local storage");

    // .push() adds the new user details to the end of the array

    username.push(inputUsername);
    password.push(inputPassword);
    phone.push(inputPhone);
    email.push(inputEmail);
    userId.push(inputUserId);
    // .setItem() sets the new user details to the local storage

    localStorage.setItem("username", JSON.stringify(username));
    localStorage.setItem("password", JSON.stringify(password));
    localStorage.setItem("phone", JSON.stringify(phone));
    localStorage.setItem("email", JSON.stringify(email));
    localStorage.setItem("userId", JSON.stringify(userId));
    alert("finished");
    return true;
  } else {
    alert(
      "An error has occured. Please try again. If the issue continues please contact me at dean.cadry@reddamhouse.com.au"
    );
    window.location = "../Login-Signup-System/signup_page.html"; // Redirect to sign up page
    return false;
  }
}
