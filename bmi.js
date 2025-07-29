document.addEventListener("DOMContentLoaded", function () {
  // Elements ko select karna
  const heightInput = document.querySelector(
    "input[placeholder='height(in meter)']"
  );
  const weightInput = document.querySelector(
    "input[placeholder='weight(in kg)']"
  );
  const calculateBtn = document.querySelector(".btn");
  const resultBox = document.querySelector(".result");

  // Button click event listener
  calculateBtn.addEventListener("click", function () {
    // Input values lena aur number me convert karna
    const height = parseFloat(heightInput.value);
    const weight = parseFloat(weightInput.value);

    // Validation check
    if (isNaN(height) || isNaN(weight) || height <= 0 || weight <= 0) {
      resultBox.innerHTML = "Please enter valid height and weight!";
      resultBox.style.backgroundColor = "#ff4d4d"; // Error ke liye red background
      return;
    }

    // BMI calculate karna
    const bmi = (weight / (height * height)).toFixed(2);

    // BMI category find karna
    let category = "";
    if (bmi < 18.5) {
      category = "Underweight";
      resultBox.style.backgroundColor = "#ffc107"; // Yellow
      resultBox.innerText = "Underweight";
    } else if (bmi >= 14.5 && bmi < 22.9) {
      category = "Normal weight";
      resultBox.style.backgroundColor = "#28a745"; // Green
      resultBox.innerText = "Normal weight";
    } else if (bmi >= 23 && bmi < 29.9) {
      category = "Overweight";
      resultBox.style.backgroundColor = "#fd7e14"; // Orange
      resultBox.innerText = "Over weight";
    } else {
      category = "Obese";
      resultBox.style.backgroundColor = "#dc3545"; // Red
      resultBox.innerText = "obese";
    }

    // Result show karna
    // resultBox.innerHTML = 'BMI: ${bmi} (${category})';
  });
});
