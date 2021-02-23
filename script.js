let arr = [];
let number = '';

const display = document.getElementById("displayP");
const subDisplay = document.getElementById("sub-display");

function clearAll() {
    while(arr[0]) {
        arr.pop();
    }
    display.textContent = 0;
}

function createNumber(num) {
    number += num;
    //console.log(number);
    if(arr.length == 0) {               //only print number (since array is empty)
        display.textContent = number;
    } else {
        printArray();
    }
}

function createOperator(char) {
    if(number != '') {              //test for multiple opperator presses (push only opperator)
        pushToArray(number);
    }
    pushToArray(char);
    number = '';                    //reset number if added to array
    printArray();                   

}

function pushToArray(v) {
    arr.push(v);
    number = '';
    printArray();
}

function printArray() {
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    display.textContent = str + number;
    console.log(arr);
}






/*
let tempNumber = '';
let displayNum = '';
let firstNumber = '';
let secondNumber = '';
let opperator = '';
let answer = 0;
let count = 0;

const display = document.getElementById("displayP");
const subDisplay = document.getElementById("sub-display");

//returns sum of two numbers
function add(a, b) {
    int1 = a + b;
    return int1;
}
//returns difference of two numbers
function subtract(a, b) {
    int1 = a - b;
    return int1;
}
//returns product of two numbers
function multiply(a, b) {
    int1 = a * b;
    return int1;
}
//returns division of two numbersv
function divide(a, b) {
    int1 = a / b;
    return int1;
}
//reset all variables (clear)
function clearAll() {
    tempNumber = '';
    firstNumber = '';
    secondNumber = '';
    displayNum = '';
    opperator = '';
    display.textContent = 0;
    subDisplay.textContent = "";
}
//displays
function displayNumber(num) {
    tempNumber += num;
    displayNum += num + " ";
    display.textContent = tempNumber;
}
//adds opperator to the display
function displayOpperator(char) {
    opperator = char;
    firstNumber = tempNumber;
    displayNum += char + " ";
    tempNumber = '';   
    subDisplay.textContent = firstNumber + " " + opperator;
    display.textContent = tempNumber;
}
//main display output
function displayResult() {
    secondNumber = tempNumber;
    subDisplay.textContent = firstNumber + " " + opperator + " " + secondNumber + " =";
    operate(opperator, firstNumber, secondNumber);
}
//add decimal to number
function addDecimal() {
    tempNumber += ".";
    displayNum += ".";
    display.textContent = tempNumber;
}
//remove last digit from primary display
function deleteLast() {
    tempNumber = tempNumber.slice(0, -1);
    displayNum = displayNum.slice(0, -1);
    display.textContent = tempNumber;
}
//calls appropriate math function
function operate(opp, a, b) {
    a = Number(a);
    b = Number(b);

    switch(opperator) {
        case '+':
            answer = add(a, b);
            display.textContent = answer;
            break;
        case '-':
            answer = subtract(a, b);
            display.textContent = answer;
            break;
        case '/':
            answer = divide(a, b);
            display.textContent = answer;
            break;
        case '*':
            answer = multiply(a, b);
            display.textContent = answer;
            break;
    }
}
*/