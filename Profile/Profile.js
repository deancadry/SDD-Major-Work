function validateDetails(){

    var uname 
    var uID

    uname = document.getElementById('uname').value;
    uID = document.getElementById('uID').value;

    if (uname == "") {
        alert("Name must be filled out");
        window.location.href = "Profile.html";
        return false;
    }
    if (uID == "") {
        alert("User ID must be filled out");
        window.location.href = "Profile.html";
        return false;
    }

    if(uname === localStorage.getItem(uname) && uID === localStorage.getItem(userId)){
        hide();
        return true;
    }
    else{
        alert("Invalid User ID or Name");
        window.location.href = "Profile.html";
        return false;
    };

}

function hide(){

    var x = document.getElementById("preDisplay");

    x.style.display = "none";
}


function displayDetails(){





}