const number_input = document.getElementById("number1");
const number_input1 = document.getElementById("number2");
const percent_val = document.querySelectorAll(".percent-button");
const tip_amount = document.querySelector(".tip_amount");
const total = document.querySelector(".total");
const resetbtn = document.querySelector(".reset_btn");
const text_value = document.querySelector(".text_value");

// user input
number_input.addEventListener("input", () => calculateValue());
number_input1.addEventListener("input", () => calculateValue());

const calculateValue = () => {
  let input_1 = Number(number_input.value);
  let input_2 = Number(number_input1.value);
  const new_value = input_1 / input_2;

  // tip_amount.textContent = ` $${new_value.toFixed(2)}`;
  return new_value;
};

const calculateValue_add = () => {
  let input_add = Number(number_input.value);
  let input_add2 = Number(number_input1.value);
  const add_value = input_add + input_add2;

  return add_value;
};
// custom
// function custom() {
//   const text_value = document.querySelector(".text_value").value;
//   const new_val = Number(text_value);
//   // divide value
//   const mul_custom = calculateValue_add() * new_val;
// }
text_value.addEventListener("input", function () {
  const text_value = document.querySelector(".text_value").value;
  let new_val = Number(text_value);
  // divide value
  const mul_custom = calculateValue() * new_val;
  total.textContent = `$${Number(mul_custom).toFixed(2)}`;
  // multiply tip
  const add_custom = calculateValue_add() + new_val;
  tip_amount.textContent = `$${Number(add_custom).toFixed(2)}`;
  console.log(mul_custom);
  console.log(add_custom);
});
// loop

for (let i = 0; i < percent_val.length; i++) {
  percent_val[i].addEventListener("click", function () {
    let new_percent_value =
      Number(percent_val[i].value ) * calculateValue();
    console.log(new_percent_value);

    let add_percwent =
      Number(percent_val[i].value ) + calculateValue_add();
    console.log(add_percwent);
    total.textContent = `$${add_percwent.toFixed(2)}`;
    tip_amount.textContent = `$${new_percent_value.toFixed(2)}`;
  });
}

// reset
const reset_value = () => {
  location.reload();
};
resetbtn.addEventListener("click", reset_value);
