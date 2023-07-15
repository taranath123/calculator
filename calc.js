let result = document.getElementById("result");
let calculation = "";

function appendNumber(number) {
  calculation += number;
  result.value = calculation;
}

function appendOperator(operator) {
  calculation += operator;
  result.value = calculation;
}

function calculate() {
  try {
    result.value = eval(calculation);
    calculation = "";
  } catch (error) {
    result.value = "Error";
  }
}

function clearResult() {
  calculation = "";
  result.value = "";
}

function deleteLastChar() {
  calculation = calculation.slice(0, -1);
  result.value = calculation;
}
