// Purpose: To display the last 3 calculations of each tax type
function displayCT() {
  let cLast3 = JSON.parse(localStorage.getItem("ctLast3"));
  document.getElementById("header").innerHTML = "Company Tax";
  document.getElementById("1").innerHTML =
    "Most Recent Calculation: $" + cLast3[0];
  document.getElementById("2").innerHTML =
    "2nd Most Recent Calculation: $" + cLast3[1];
  document.getElementById("3").innerHTML =
    "3rd Most Recent Calculation: $" + cLast3[2];
}

function displayPT() {
  let pLast3 = JSON.parse(localStorage.getItem("ptLast3"));
  document.getElementById("header").innerHTML = "Payroll Tax";
  document.getElementById("1").innerHTML =
    "Most Recent Calculation: $" + pLast3[0];
  document.getElementById("2").innerHTML =
    "2nd Most Recent Calculation: $" + pLast3[1];
  document.getElementById("3").innerHTML =
    "3rd Most Recent Calculation: $" + pLast3[2];
}

function displayIT() {
  let iLast3 = JSON.parse(localStorage.getItem("itLast3"));
  document.getElementById("header").innerHTML = "Individual Tax";
  document.getElementById("1").innerHTML =
    "Most Recent Calculation: $" + iLast3[0];
  document.getElementById("2").innerHTML =
    "2nd Most Recent Calculation: $" + iLast3[1];
  document.getElementById("3").innerHTML =
    "3rd Most Recent Calculation: $" + iLast3[2];
}
