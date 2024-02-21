const arr = [0, 0, 0];

function calculateITax() {
    let inputIncome = 0;
    let lowest;
    let lowmiddle;
    let highmiddle;
    let highest;
    let medicareLevy = 0;
    let newValue = 0;
    inputIncome = document.getElementById("income").value;

    if (inputIncome < 18200) {
        newValue = 0;
        document.getElementById("outputTax").innerHTML = "No Tax";
        shiftRight(newValue);


    } else if (inputIncome >= 18201 && inputIncome < 45001) {
        lowest = (inputIncome - 18200) * 0.16;
        medicareLevy = (inputIncome - 18200) * 0.02;
        newValue = (lowest + medicareLevy);
        let number = newValue.toLocaleString("en-AU", {style:"currency", currency: "AUD"});
        document.getElementById("outputTax").innerHTML = "Your Estimated Tax Payment is: " + number + " , This value is including the Medicare levy of 2%";

        shiftRight(newValue);


    } else if (inputIncome >= 45001 && inputIncome < 135000) {
        lowmiddle = ((inputIncome - 45000) * 0.30) + 4288;
        medicareLevy = (inputIncome - 18200) * 0.02;
        newValue = (lowmiddle + medicareLevy);
        let number = newValue.toLocaleString("en-AU", {style:"currency", currency: "AUD"});
        document.getElementById("outputTax").innerHTML = "Your Estimated Tax Payment is: " + number + " , This value is including the Medicare levy of 2%";
        shiftRight(newValue);
    
    
    } else if (inputIncome >= 135000 && inputIncome < 190001) {
        highmiddle = ((inputIncome - 135000) * 0.37) + 31288;
        medicareLevy = (inputIncome - 18200) * 0.02;
        newValue = (highmiddle + medicareLevy);
        let number = newValue.toLocaleString("en-AU", {style:"currency", currency: "AUD"});
        document.getElementById("outputTax").innerHTML = "Your Estimated Tax Payment is: " + number + "   , This value is including the Medicare levy of 2%";

        shiftRight(newValue);
    
    } else if (inputIncome >= 190001) {
        highest = ((inputIncome - 190000) * 0.45) + 51638;
        medicareLevy = (inputIncome - 18200) * 0.02;
        newValue = (highest + medicareLevy);
        let number = newValue.toLocaleString("en-AU", {style:"currency", currency: "AUD"});
        document.getElementById("outputTax").innerHTML = "Your Estimated Tax Payment is: " + number + "   , This value is including the Medicare levy of 2%";
        shiftRight(newValue);
    }
}


function shiftRight() {
    arr.pop();
    arr.unshift(newValue);
    console.log(arr);
    localStorage.setItem("itLast3", JSON.stringify(arr));
    return arr;
}
