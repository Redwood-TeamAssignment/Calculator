(function() {
    "use strict";
// Assigns variables that can be modified.
    var firstEntry = document.getElementById("entry");
    var binaryOperator = document.getElementById("operator");
    var secondEntry = document.getElementById("secondEntry");
    var calcOperators = document.getElementsByClassName("operators");
    var numberClicks = document.getElementsByClassName("number");
    var calcClear = document.getElementById("clear");
    var calcExecute = document.getElementById("equals");

    // Adds eventlisteners to the operator function
    for (var i = 0; i < calcOperators.length; i++) {

        calcOperators[i].addEventListener('click', operatorfx);
    }

    // Adds eventlisteners to the number entry function.
    for (var n = 0; n < numberClicks.length; n++) {

        numberClicks[n].addEventListener('click', numberEntry);
    }

    // Adds eventlisteners to the clear and equal functions
    calcClear.addEventListener('click', clearFields);
    calcExecute.addEventListener('click', equals);

    // Function that clears the numbers and operators in the text box.
    function clearFields() {
        firstEntry.setAttribute("value", "");
        binaryOperator.setAttribute("value", "");
        secondEntry.setAttribute("value", "");
    }
    // Function allows for the input of numbers as a string into the text boxes.
    function numberEntry() {
        console.log(binaryOperator.getAttribute("value"));
        if (binaryOperator.getAttribute("value") === "") {
            firstEntry.setAttribute("value", firstEntry.value + this.value);

        }
        else {
            secondEntry.setAttribute("value", secondEntry.value + this.value);

        }
    }
    // Function allows for the input of the operator into the text box.
    function operatorfx() {
        binaryOperator.setAttribute("value", this.value);
    }

    // Function that executes the function based on the the given operator.
    function equals() {
        var firstnum = Number(firstEntry.getAttribute("value"));
        var secondnum = Number(secondEntry.getAttribute("value"));
        var total;
        switch (binaryOperator.getAttribute("value")) {
            case "+":
                total = firstnum + secondnum;
                break;
            case "-":
                total = firstnum - secondnum;
                break;
            case "*":
                total = firstnum * secondnum;
                break;
            case "/":
                total = firstnum / secondnum;
                break;
        }
        firstEntry.setAttribute("value", total);
        binaryOperator.setAttribute("value", "");
        secondEntry.setAttribute("value", "");
    }
})();
