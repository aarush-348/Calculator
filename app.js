let currentInput = "";
let firstNumber = null;
let secondNumber = null;
let operator = null;
const resultDiv = document.getElementById("result");

const numberButtons = document.querySelectorAll(".calculator__key");
const operatorButtons = document.querySelectorAll(".calculator__key_operator");

numberButtons.forEach((button) => {
  button.addEventListener("click", () => {
    currentInput += button.id;
    resultDiv.textContent = currentInput;
  });
});

operatorButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const value = button.id;

    if (value === "clear") {
      currentInput = "";
      firstNumber = null;
      secondNumber = null;
      operator = null;
      resultDiv.textContent = "";
      return;
    }

    if (value === "=") {
      if (firstNumber !== null && operator !== null && currentInput !== "") {
        secondNumber = parseFloat(currentInput);
        const result = operate(firstNumber, operator, secondNumber);
        resultDiv.textContent = result;
        firstNumber = result;
        currentInput = "";
        secondNumber = null;
        operator = null;
      }
      return;
    }

    // If operator is clicked
    if (operator && currentInput !== "") {
      // Perform previous operation
      secondNumber = parseFloat(currentInput);
      const result = operate(firstNumber, operator, secondNumber);
      firstNumber = result;
      resultDiv.textContent = result;
      currentInput = "";
      operator = value;
    } else {
      firstNumber = parseFloat(currentInput);
      currentInput = "";
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
  if (b === 0) {
    alert("Error: Division by zero is undefined.");
    return "Error";
  }
  return a / b;
}

function operate(a, op, b) {
  switch (op) {
    case "+":
      return add(a, b);
    case "-":
      return subtract(a, b);
    case "*":
      return multiply(a, b);
    case "/":
      return divide(a, b);
    default:
      return "Invalid operator";
  }
}
