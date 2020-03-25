//Global Variables
let operator = undefined;
let firstNumber = document.querySelector("#fNumber").value;
let secondNumber = document.querySelector("#sNumber").value;
//Converts the input values into numbers so that they can be operated upon properly
let firstInt = parseInt(firstNumber, 10)
let secondInt = parseInt(secondNumber, 10)

//Adds an event listener to the operator buttons - then assigns the proper value to the operator variable
let operatorNodeList = document.querySelectorAll(".opBtn");
operatorArray = Array.from(operatorNodeList)
for (let i = 0; i < operatorArray.length; i++) {
    operatorArray[i].addEventListener("click", function() {
        if (operatorArray[i].value == "+") {
            operator = 0
        } else if (operatorArray[i].value == "-"){
            operator = 1
        } else if (operatorArray[i].value == "*") {
            operator = 2
        }else if (operatorArray[i].value == "/") {
            operator = 3
        }
    });
};

//Add Function
add = (firstValue, secondValue) => (firstValue + secondValue);

//Subtract Function
subtract = (firstValue, secondValue) => (firstValue - secondValue);

//Multiply Function
multiply = (firstValue, secondValue) => (firstValue * secondValue);

//Divide Function
divide = (firstValue, secondValue) => (firstValue / secondValue);

//Operate Function
let operateBtn = document.querySelector("#operate")
operateBtn.addEventListener("click", function() {
    if (operator == 0) {
        console.log(add(firstInt, secondInt)
    )} else if (operator == 1) {
        console.log(subtract(firstInt, secondInt))
    } else if (operator == 2) {
        console.log(multiply(firstInt, secondInt))
    } else if (operator == 3) {
        console.log(divide(firstInt, secondInt))
    }
});
