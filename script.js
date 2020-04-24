const input_container = document.getElementById("input-container");
const first_input = document.getElementById("first-input");
const input_array = document.querySelectorAll(".input");

const code = [3, 8, 1, 9];
const code_input = [];

let flag = false;

function compare() {
  if (
    code.length === code_input.length &&
    code.every((value, index) => {
      return value === code_input[index];
      //   console.log("current value of code: ", value);
      //   console.log("current value of code input: ", code_input[index]);
    })
  ) {
    alert("You have entered correct code!");
  } else {
    alert("wrong code...");
    location.reload();
  }
}

first_input.focus();

input_array.forEach((input, index, array) => {
  input.addEventListener("keyup", (e) => {
    console.log(e.keyCode, "clicked");

    // check if it's a valid number
    if (e.keyCode < 48 || e.keyCode > 57) {
      alert("numbers only");
      return;
    }

    // push it to array
    code_input.push(Number(e.target.value));

    console.log(code_input);
    // focus on next input if possible
    if (index + 1 < array.length) {
      array[index + 1].focus();
    } else {
      compare();
    }
  });
});
