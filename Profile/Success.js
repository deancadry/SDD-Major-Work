let user = sessionStorage.getItem("sUsername");
let id = sessionStorage.getItem("sUserId");
let pass = JSON.parse(localStorage.getItem("password"));

document.getElementById("hero").innerHTML = "Welcome " + user + "!";

function history() {
  window.location = "../History/History.html";
}

function deleteProfile() {
  if (confirm("Are you sure you want to delete your profile?")) {
    alert("This action cannot be undone");
    let inputPass = prompt("Please enter your password to confirm");
    if ((inputPass = null)) {
      return false;
    } else {
      let i = 0;
      while (i < userLength && i < idLength) {
        if (user == username[i] && id == uID[i] && inputPass == pass[i]) {
          username.splice(i, 1);
          uID.splice(i, 1);
          pass.splice(i, 1);
          email.splice(i, 1);
          phone.splice(i, 1);
          localStorage.setItem("username", JSON.stringify(username));
          localStorage.setItem("userId", JSON.stringify(uID));
          localStorage.setItem("password", JSON.stringify(pass));
          localStorage.setItem("email", JSON.stringify(email));
          localStorage.setItem("phone", JSON.stringify(phone));
          alert("Profile deleted");
          window.location = "../open.html";
          return true;
        }
        i = i + 1;
      }
      alert("Profile not found");
      window.location = "../open.html";
      return false;
    }
  } else {
    return false;
  }
}
