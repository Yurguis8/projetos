let button = document.getElementsByClassName('button');
let buttonMais = document.querySelector(".special");
let currentNumber = "";
let previousNumber = "";
let operation = null;
const visor = document.getElementById("visor");

function pressNumber(num) {
    if (currentNumber.length < 15) { // Limite de dígitos
        currentNumber += num;
        updateVisor(currentNumber);
        visorStyle();
    }
    
}

function pressDot() {
    if (!currentNumber.includes(".")) {
        currentNumber += ".";
        updateVisor(currentNumber);
        visorStyle();
    }
}

function setOperation(op) {
    if (currentNumber === "") return;
    if (previousNumber !== "") {
        calculate();
    }
    operation = op;
    previousNumber = currentNumber;
    currentNumber = "";
    visorStyle();
}

function calculate() {
    if (operation === null || currentNumber === "" || previousNumber === "") return;
    const num1 = parseFloat(previousNumber);
    const num2 = parseFloat(currentNumber);
    let result = 0;

    switch (operation) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num2 !== 0 ? num1 / num2 : "Erro";
            break;
        default:
            return;
    }

    currentNumber = result.toString();
    operation = null;
    previousNumber = "";
    updateVisor(currentNumber);
    visorStyle();
}

function calculateRoot() {
    if (currentNumber === "") return;
    const num = parseFloat(currentNumber);
    currentNumber = Math.sqrt(num).toString();
    updateVisor(currentNumber);
    visorStyle();
}

function calculatePercent() {
    if (currentNumber === "") return;
    currentNumber = (parseFloat(currentNumber) / 100).toString();
    updateVisor(currentNumber);
    visorStyle();
}

function clearVisor() {
    currentNumber = "";
    previousNumber = "";
    operation = null;
    updateVisor("0");
    visorStyle();
}

function updateVisor(value) {
    visor.textContent = value;
}

function animation(a) {
    if (a === 'special') {
        buttonMais.style.backgroundColor = "rgb(183, 232, 255)"
        setTimeout(() => {
            buttonMais.style.backgroundColor = ""
        }, 300);
        return; // Evita que o código abaixo seja executado
    } else {
    button[a].style.backgroundColor = "rgb(183, 232, 255)"
    setTimeout(() => {
        button[a].style.backgroundColor = ""
    }, 300);
}
}
function visorStyle() {
    visor.style.borderColor = "rgb(203, 232, 255)"
        visor.style.transform = 'scale(1.05)'
        visor.style.color = 'white'
        visor.style.backgroundColor = 'rgba(173, 216, 230, 0)'
        setTimeout(() => {
            visor.style.borderColor = "rgb(110, 129, 236)"
            visor.style.transform = 'scale(1)'
            visor.style.color = 'rgb(193, 235, 255)'
            visor.style.backgroundColor = 'rgba(58, 69, 100, 0.884)'
        }, 300);
}