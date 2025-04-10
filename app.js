let firstNumber = null;
let secondNumber = null;
let operator = null;

const numberButtons = document.querySelectorAll(".calculator__key");
const operatorButtons = document.querySelectorAll(".calculator__key_operator");
const resultDiv = document.getElementById("result");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const number = parseInt(button.id);
    if (operator === null) {
      firstNumber = number;
    } else {
      secondNumber = number;
    }
    updateDisplay();
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.id;
    if (value === "=") {
      if (firstNumber !== null && secondNumber !== null && operator !== null) {
        const result = operate(firstNumber, operator, secondNumber);
        resultDiv.textContent = result;

        firstNumber = result;
        secondNumber = null;
        operator = null;
      }
    } else if (value === "clear") {
      firstNumber = null;
      secondNumber = null;
      operator = null;
      resultDiv.textContent = "";
    } else {
      operator = value;
    }
  });
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (a === 0 || b === 0) {
    alert(
      "Error: Division by zero is undefine,. Please enter a valid divisor."
    );
  } else {
    return a / b;
  }
}

function operate(number1, operator, number2) {
  switch (operator) {
    case "+":
      return add(number1, number2);
    case "-":
      return subtract(number1, number2);
    case "*":
      return multiply(number1, number2);
    case "/":
      return divide(number1, number2);
    default:
      return "Invalid operator";
  }
}

function updateDisplay() {
  if (firstNumber !== null && operator !== null && secondNumber !== null) {
    resultDiv.textContent = firstNumber + operator + secondNumber;
  } else if (firstNumber !== null) {
    resultDiv.textContent = firstNumber;
  }
}