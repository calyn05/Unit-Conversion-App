const inputNumber = document.getElementById("number-input");
const massResult = document.getElementById("mass-result");
const lengthResult = document.getElementById("length-result");
const volumeResult = document.getElementById("volume-result");

inputNumber.addEventListener("input", main);

function pluralizeWords() {
  if (inputNumber.value === 1) {
  }
}

function calculateLength() {
  if (inputNumber.value <= 0) {
    lengthResult.textContent = 0;
  } else {
    lengthResult.textContent =
      inputNumber.value +
      " meter " +
      "= " +
      (inputNumber.value * 3.280839895).toFixed(3) +
      " feet " +
      "| " +
      inputNumber.value +
      " feet " +
      "= " +
      (inputNumber.value / 3.280839895).toFixed(3) +
      " meter";
  }
}

function calculateVolume() {
  if (inputNumber.value <= 0) {
    volumeResult.textContent = 0;
  } else {
    volumeResult.textContent =
      inputNumber.value +
      " liter " +
      "= " +
      (inputNumber.value * 0.264172052).toFixed(3) +
      " gallon " +
      "| " +
      inputNumber.value +
      " gallon " +
      "= " +
      (inputNumber.value / 0.264172052).toFixed(3) +
      " liter";
  }
}

function calculateMass() {
  if (inputNumber.value <= 0) {
    massResult.textContent = 0;
  } else {
    massResult.textContent =
      inputNumber.value +
      " kilo " +
      "= " +
      (inputNumber.value * 2.2046).toFixed(3) +
      " pound " +
      "| " +
      inputNumber.value +
      " pound " +
      "= " +
      (inputNumber.value / 2.2046).toFixed(3) +
      " kilo";
  }
}
function main() {
  calculateLength();
  calculateVolume();
  calculateMass();
}
main();
