let arr = [];
let number = '';
let firstNumber = '';
let secondNumber = '';
let opperator = '';
let answer = '';

const display = document.getElementById("display-main");
const subDisplay = document.getElementById("sub-display");

function clearAll() {           //clear array and all variables
    arr = [];
    number = '';
    firstNumber = 0;
    secondNumber = 0;
    opperator = '';
    answer = 0;
    display.textContent = 0;
}

function deleteLast() {         //delete last integer from number variable
    if(number.length > 0) {     //test if there is anything to delete
        number = number.slice(0, -1);
        if(number == '') {      //if number is empty, display 0
            display.textContent = 0;
            return;
        }
        printArray();           //otherwise print the arr
    } else if(number.length == 0 && !(testForOperator())) {     //test for operator
        display.textContent = 0
    } else {                    //if there is an operator, pop() the operator and display
        arr.pop();              //the arr
        printArray();
    }
}

function testForOperator() {
    let last = arr[arr.length - 1];
    if(last == '+' || last == '-' || last == '*' || last == '/')
        return true;
    else
        return false;
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
    //console.log(arr);
}

function equals() {
    arr.push(number);
    number = '';

    if(Number(arr[0]) && !Number(arr[1]) && Number(arr[2])) {
        firstNumber = arr.shift();
        opperator = arr.shift();
        secondNumber = arr.shift();
        answer = operate(opperator, firstNumber, secondNumber);
        display.textContent = answer;        
        console.log(arr);
    } else {
        firstNumber = answer;
        secondNumber = arr.shift();
        opperator = arr.shift();
        answer = operate(opperator, firstNumber, secondNumber);
        display.textContent = answer;
    }

}

function operate(opp, a, b) {
    a = Number(a);
    b = Number(b);

    switch(opperator) {
        case '+':
            return a + b;
            break;
        case '-':
            return a - b;
            break;
        case '/':
            return a / b;
            break;
        case '*':
            return a * b;
            break;
    }
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

/*
function equals() {
    arr.push(number);
    number = '';

    if(Number(arr[0]) && !Number(arr[1]) && Number(arr[2])) {
        firstNumber = arr.shift();
        opperator = arr.shift();
        secondNumber = arr.shift();
        answer = operate(opperator, firstNumber, secondNumber);
        display.textContent = answer;        
        //console.log(firstNumber);
        //console.log(arr);
        pushToArray(answer);
        console.log(arr);
    } else {
        firstNumber = answer;
        secondNumber = arr.shift();
        opperator = arr.shift();
        answer = operate(opperator, firstNumber, secondNumber);
        display.textContent = answer;
        pushToArray(answer);
    }

}
*/