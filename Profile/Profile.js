function validateDetails(){

    let inputUname = document.getElementById('uname').value;
    let inputuID= document.getElementById('uID').value;
    let username = JSON.parse(localStorage.getItem("username"));
    let uID = JSON.parse(localStorage.getItem("userId"));



    if (inputUname == "") {
        alert("Name must be filled out");
        window.location.href = "Profile.html";
        return false;
    }

    if (inputuID == "") {
        alert("User ID must be filled out");
        window.location.href = "Profile.html";
        return false;
    }

    let i = 0;
    let user = username.length;
    let id = uID.length;
    while (i < user && i < id) {
        if (inputUsername == uname[i] && inputuID == id[i]) {
            hide()
            alert("Login successful");        
            return true;
        }
        i = i + 1;     
    } 
    alert("Username or Password is invalid. Please try again.");
    return false;

}

function hide(){

    var x = document.getElementById("preDisplay");
    if (x.style.display === "none"){
        x.style.display = "block";
        
    } else{

        x.style.display = "none";
    }


}


function displayDetails(){





}