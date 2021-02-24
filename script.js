let arr = [];
let number = '';
let firstNumber = '';
let secondNumber = '';
let opperator = '';
let answer = '';

const display = document.getElementById("display-main");
const error = document.getElementById("error");
//const subDisplay = document.getElementById("sub-display"); //not used in this version

/****************** function resets array and clears all variables *****************/
function clearAll() {
    arr = [];
    number = '';
    firstNumber = '';
    secondNumber = '';
    opperator = '';
    answer = '';
    display.textContent = 0;
    error.textContent = '';
}

/***************** function deletes the last input from display/array ******************/
function deleteLast() {
    if(number.length > 0) {     //test if there is anything to delete
        number = number.slice(0, -1);
        if(number == '' && arr.length == 0) {      //if number & arr is empty, display 0
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

/************** function tests whether the last arr member is a operator ************/
function testForOperator() {
    let last = arr[arr.length - 1];
    if(last == '+' || last == '-' || last == '*' || last == '/')
        return true;
    else
        return false;
}

/************** function takes num from input and creates running variable ************/
function createNumber(num) {
    number += num;
    if(arr.length == 0) {               //only print number (since array is empty)
        display.textContent = number;
    } else {
        printArray();
    }
}

/********* function pushes number and operator to array and updates displays **********/
function createOperator(char) {
    if(number == '') {              //test for multiple opperator presses (push only opperator)
        display.textContent = 0;
        error.textContent = "Error: Please enter a number first";
    } else {
        clearError();
        pushToArray(number);
        pushToArray(char);
        number = '';                //reset number if added to array
        printArray();
    }                 
}

/********* function clears error at bottom of screen *********/
function clearError() {
    error.textContent = '';
}

/********* function ads elment to end of array *********/
function pushToArray(element) {
    arr.push(element);
    number = '';
    printArray();
}

/********* function prints array (used to show array in main display) *********/
function printArray() {
    let str = '';
    for(let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    display.textContent = str + number;
}

/********* function controls main calculations of calculator *********/
function equals() {
    arr.push(number);
    number = '';

    if(Number(arr[0]) && !Number(arr[1]) && Number(arr[2])) {
        firstNumber = arr.shift();
        opperator = arr.shift();
        secondNumber = arr.shift();
        answer = operate(opperator, firstNumber, secondNumber);
        display.textContent = answer;        
    } else {
        firstNumber = answer;
        secondNumber = arr.shift();
        opperator = arr.shift();
        answer = operate(opperator, firstNumber, secondNumber);
        display.textContent = answer;
    }
}

/********* function returns basic math calculations *********/
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