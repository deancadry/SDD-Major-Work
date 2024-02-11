var inputIncome

const button = document.querySelector('btn');
button.addEventListener('click', calculateITax);
alert("calculating tax")


function calculateITax() {

    inputIncome = document.getElementById("income").value

    if (inputIncome < 18200) {
        document.getElementById("outputTax").innerHTML = "No Tax"
    } else if (inputIncome >= 18201 && inputIncome < 450000) {
        document.getElementById("outputTax").innerHTML = "16% for every dollar over $18200"
    } else if (inputIncome >= 45001 && inputIncome < 135000) {
        document.getElementById("outputTax").innerHTML = "$4288 + 30% for every dollar over $45000"
    } else if (inputIncome >= 135000 && inputIncome < 190000) {
        document.getElementById("outputTax").innerHTML = "$31288 + 37% for every dollar over $135000"
    } else if (inputIncome >= 190001) {
        document.getElementById("outputTax").innerHTML = "51,638 + 45% for every dollar over $190000"
    }

}