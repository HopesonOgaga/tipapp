const number_input = document.getElementById("number1");
const number_input1 = document.getElementById("number2");
const percent_val = document.querySelectorAll(".percent-button");
const tip_amount = document.querySelector(".tip_amount");
const total = document.querySelector(".total");

console.log(number_input);
// user input
number_input.addEventListener("input", () => calculateValue());
number_input1.addEventListener("input", () => calculateValue());

const calculateValue = () => {
  let input_1 = Number(number_input.value);
  let input_2 = Number(number_input1.value);
  const new_value = input_1 / input_2;
  tip_amount.textContent = new_value.toFixed(2);
};
