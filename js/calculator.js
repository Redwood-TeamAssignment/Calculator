"use strict";

var firstEntry = document.getElementById("entry");
var binaryOperator = document.getElementById("operator");
var secondEntry=document.getElementById("secondEntry");
var calcOperators=document.getElementsByClassName("operators");
var numberClicks=document.getElementsByClassName("number");
var calcClear=document.getElementById("clear");
var calcExecute=document.getElementById("equals");

for(var i=0; i<calcOperators.length;i++){

    calcOperators[i].addEventListener('click', operatorfx);
}

for(var n=0; n<numberClicks.length;n++){

    numberClicks[n].addEventListener('click', numberEntry);
}

calcClear.addEventListener('click', clearFields);
calcExecute.addEventListener('click', equals);

function clearFields(){
//            document.getElementById('calculator').reset();
    firstEntry.setAttribute("value", "");
    binaryOperator.setAttribute("value", "");
    secondEntry.setAttribute("value", "");
}
function numberEntry() {
    console.log(binaryOperator.getAttribute("value"));
    if(binaryOperator.getAttribute("value")==="") {
        firstEntry.setAttribute("value", this.value + firstEntry.value);

    }
    else{
        secondEntry.setAttribute("value", this.value + secondEntry.value);

    }
}

function operatorfx(){
    binaryOperator.setAttribute("value",this.value);
}



function equals(){
    var firstnum=Number(firstEntry.getAttribute("value"));
    var secondnum=Number(secondEntry.getAttribute("value"));
    var total;
    switch(binaryOperator.getAttribute("value")){
        case "+":
            total=firstnum+secondnum;
            break;
        case "-":
            total=firstnum-secondnum;
            break;
        case "*":
            total=firstnum*secondnum;
            break;
        case "/":
            total=firstnum/secondnum;
            break;
    }
    firstEntry.setAttribute("value",total);
    binaryOperator.setAttribute("value", "");
    secondEntry.setAttribute("value", "");
}

