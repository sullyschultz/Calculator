
let currentNum = "";
let previousNum = "";
let currentOperator = "";

const prevDisplayNum = document.querySelector("#previousNum");
const currDisplayNum = document.querySelector("#currentNum");
const numInput = document.querySelectorAll(".num");
const opInput = document.querySelectorAll(".operator");
const allClearBtn = document.getElementById("allClear");
allClearBtn.addEventListener('click', allClear);
const deleteBtn = document.getElementById("clear");
deleteBtn.addEventListener('click', deleteCurrent);
const equalsBtn = document.getElementById("equals");
equalsBtn.addEventListener('click', calculate);
const decimalBtn = document.getElementById('decimal');
decimalBtn.addEventListener('click', addDecimal);



numInput.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleInput(e.target.textContent);
    });
});

function handleInput(number) {
    if(currentNum.length <= 15) {
        currentNum += number;
        console.log(currentNum);
        currDisplayNum.textContent = currentNum;
    }
}

opInput.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        handleOperator(e.target.textContent);
    });
});

function handleOperator(op) {
    currentOperator = op;
    previousNum = currentNum;
    prevDisplayNum.textContent = currDisplayNum.textContent + " " + op;
    currentNum = "";
    currDisplayNum.textContent = "";
}

function calculate(){
    currentNum = Number(currentNum);
    previousNum = Number(previousNum);
    if(currentOperator === "+") {
        previousNum += currentNum;
    } else if(currentOperator === "-") {
        previousNum -= currentNum;
    } else if(currentOperator === "*") {
        previousNum *= currentNum;
    } else if( currentOperator === "/") {
        if(currentNum <= 0) {
            previousNum = "You cant divide by 0!"
            displayNumbers();
            return;
    }
        previousNum /= currentNum;
    } 
    displayNumbers();
}

function displayNumbers() {
    previousNum = previousNum.toString();
    currentNum = previousNum.toString();
    currDisplayNum.textContent = previousNum;
    prevDisplayNum.textContent = "";
    currentOperator = "";
}

function allClear() {
    currentNum = "";
    previousNum = "";
    currDisplayNum.textContent = "";
    prevDisplayNum.textContent = "";
    
}

function deleteCurrent() {
    currentNum = "";
    currDisplayNum.textContent = "";

}

function addDecimal(){
    if(!currentNum.includes(".")) {
        currentNum += ".";
        currDisplayNum.textContent = currentNum;
    } 
}
