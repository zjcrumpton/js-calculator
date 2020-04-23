//Global Variables
let operator = undefined;
let firstNumber = ""
let secondNumber = ""
let subDisplay = document.querySelector("#subDisplay");
//Clears Sub-Display On Load
subDisplay.textContent = ""
//Converts the input values into numbers so that they can be operated upon properly
let firstFloat = parseFloat(firstNumber);
let secondFloat = parseFloat(secondNumber);
//Display - use display.value to act on what's in the display box
let display = document.querySelector("#display");
let displayValue = document.querySelector("#display").value;
//Clears Text in the Display Box on page reload
display.value = ""
//Creates a state change to allow for multiple operators in use
let opState = 0;
let lastOp = "";
//Handles pushing the same single use button twice
let dotState = 0;
let eqState = 0;
let opPress = 0;
//Adds an event listener to the operator buttons - then assigns the proper value to the operator variable - then adds them to the display - it's set to one once we've used at least one operator
let operatorNodeList = document.querySelectorAll(".opBtn");
operatorArray = Array.from(operatorNodeList)
for (let i = 0; i < operatorArray.length; i++) {
        operatorArray[i].addEventListener("click", function() {
            if(opPress == 1) {
                opPress = 2
                dotState = 0
                operator = this.value;
                if (opState == 0) {
                    firstNumber = display.value
                    firstFloat = parseFloat(firstNumber)
                    opState = 1;
                    display.value += operator;
                    lastOp = this.value
                } else if(opState == 1) {
                    subDisplay.textContent = display.value
                    //Splits the expression at the operator so values can be extracted
                    let splitVal = display.value.split(lastOp)
                    firstFloat = parseFloat(splitVal[0]);
                    secondFloat = parseFloat(splitVal[1])
                    display.value = (`${operate(firstFloat, secondFloat, lastOp)}${operator}`)
                    lastOp = this.value;
                }
            } else if (opPress == 2) {
                dotState = 0
                operator = this.value;
                display.value = display.value.replace(lastOp, operator)
                lastOp = this.value;
            }})};
//Clear Button
clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", function() {
    display.value = "";
    subDisplay.textContent = "";
    firstNumber = "";
    secondNumber = "";
    firstFloat = undefined;
    secondFloat = undefined;
    opState = 0;
    lastOp = 0;
    dotState = 0;
    eqState = 0;
    opPress = 0;
});
//Enter "Equals" Button
equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", function() {
    if (eqState == 1) {
        let splitVal = display.value.split(operator)
            firstFloat = parseFloat(splitVal[0]);
            secondFloat = parseFloat(splitVal[1])
            display.value = operate(firstFloat,secondFloat,operator)
            subDisplay.textContent = ""
            opState = 0
            eqState = 0
            opPress = 1
    }
    if (display.value.includes(".")) {
        dotState = 1
    }
});
//Number Keys - These will update the display with the number you pressed
numKeyList = document.querySelectorAll(".numKey");
numKeyArray = Array.from(numKeyList);
for (let i = 0; i < numKeyArray.length; i++) {
    numKeyArray[i].addEventListener("click", function() {
        opPress = 1
        if (opState == 1){
            eqState = 1
        }
    //Stops decimal from being double pressed
        if (numKeyArray[i].value == "." && dotState !== 1) {
            dotState = 1;
            display.value += numKeyArray[i].value
        } else if (opState == 1 && numKeyArray[i].value !== "." || opState == 2 && numKeyArray[i].value !== ".") {
            let splitVal = display.value.split(/[+-/*]+/)
            firstNumber = splitVal[0]
            secondNumber = splitVal[1]
            display.value += numKeyArray[i].value
        }else if (numKeyArray[i].value !== "."){
            display.value += numKeyArray[i].value
        }
    })};
//Operate Function
function operate(firstValue, secondValue, operatorVal) {
    if (operatorVal == "+") {
        return (firstValue + secondValue)
    } else if (operatorVal == "-") {
        return(firstValue - secondValue)
    } else if (operatorVal == "*") {
        return (firstValue * secondValue)
    } else if (operatorVal == "/") {
        return (firstValue /secondValue)
    }};