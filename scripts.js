//Global Variables
let operator = undefined;
let firstNumber = ""
let secondNumber = ""
//Defines Sub-Display so it can be updated - use subDisplay.textContent to update the display
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

//Adds an event listener to the operator buttons - then assigns the proper value to the operator variable - then adds them to the display - it's set to one once we've used at least one operator
let operatorNodeList = document.querySelectorAll(".opBtn");
operatorArray = Array.from(operatorNodeList)
for (let i = 0; i < operatorArray.length; i++) {
    operatorArray[i].addEventListener("click", function() {
        operator = this.value;
        if (opState == 0) {
            firstNumber = display.value
            firstFloat = parseFloat(firstNumber)
            opState = 1;
            display.value += operator;
            console.log(operator)
            lastOp = this.value
        } else if(opState == 1) {
            subDisplay.textContent = display.value
            //Splits the expression at the operator so values can be extracted
            let splitVal = display.value.split(lastOp)
            firstFloat = parseFloat(splitVal[0]);
            secondFloat = parseFloat(splitVal[1])
                display.value = (`${operate(firstFloat, secondFloat, lastOp)}${operator}`)
                lastOp = this.value;
        }})};

//Clear Button
clearBtn = document.querySelector("#clear");
clearBtn.addEventListener("click", function() {
    display.value = ""
    subDisplay.textContent = ""
    firstNumber = ""
    secondNumber = ""
    firstFloat = undefined
    secondFloat = undefined
    opState = 0
});

//Enter "Equals" Button
equalsBtn = document.querySelector("#equals");
equalsBtn.addEventListener("click", function() {
    if (opState == 1) {
        let splitVal = display.value.split(operator)
            firstFloat = parseFloat(splitVal[0]);
            secondFloat = parseFloat(splitVal[1])
            console.log(splitVal)
    console.log(firstFloat)
    console.log(secondFloat)
    }
    display.value = operate(firstFloat,secondFloat,operator)
    subDisplay.textContent = ""
    opState = 0
});

//Number Keys - These will update the display with the number you pressed
numKeyList = document.querySelectorAll(".numKey");
numKeyArray = Array.from(numKeyList);
for (let i = 0; i < numKeyArray.length; i++) {
    numKeyArray[i].addEventListener("click", function() {
        display.value += numKeyArray[i].value
        if (opState == 1 || opState == 2) {
            let splitVal = display.value.split(/[+-/*]+/)
            firstNumber = splitVal[0]
            secondNumber = splitVal[1]
        }
    })
};

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
    }
};