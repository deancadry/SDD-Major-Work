
function displayCT(){

        var last3 = JSON.parse(localStorage.getItem("ctLast3"));
        document.getElementById("header").innerHTML = "Company Tax";
        document.getElementById("1").innerHTML = "Most Recent Calculation: $" + last3[0];
        document.getElementById("2").innerHTML = "2nd Most Recent Calculation: $" + last3[1];
        document.getElementById("3").innerHTML = "3rd Most Recent Calculation: $" + last3[2];


}

function displayPT() {

        var last3 = JSON.parse(localStorage.getItem("ptLast3"));
        document.getElemmentById("header").innerHTML = "Payroll Tax";
        document.getElementById("1").innerHTML = "Most Recent Calculation: $" + last3[0];
        document.getElementById("2").innerHTML = "2nd Most Recent Calculation: $" + last3[1];
        document.getElementById("3").innerHTML = "3rd Most Recent Calculation: $" + last3[2];

}

function displayIT() {
    
        var last3 = JSON.parse(localStorage.getItem("itLast3"));
        document.getElementById("header").innerHTML = "Income Tax";
        document.getElementById("1").innerHTML = "Most Recent Calculation: $" + last3[0];
        document.getElementById("2").innerHTML = "2nd Most Recent Calculation: $" + last3[1];
        document.getElementById("3").innerHTML = "3rd Most Recent Calculation: $" + last3[2];
}