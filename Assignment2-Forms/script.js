// Function to calculate BMI when the button is clicked
function calculateBMI() {
    // user input values for weight and height
    const weight = parseFloat(document.getElementById('weight').value);
    const heightCm = parseFloat(document.getElementById('height').value);
    const heightM = heightCm / 100; // convert height to meters

    // Check if valid input is provided
    if(weight > 0 && heightCm > 0) {
        // Calculate BMI formula: 
        const bmi = weight / (heightM * heightM);

        // Display calculated BMI and category
        const resultText = `Your BMI is ${bmi.toFixed(2)} (${bmiCategory(bmi)})`;
        document.getElementById('result').textContent = resultText;
    } else {
        // Prompt user to enter valid values if input is incorrect
        document.getElementById('result').textContent = 'Please enter valid values!';
    }
}

// Function to determine the BMI category
function bmiCategory(bmi) {
    if (bmi < 18.5) return 'Underweight';
    if (bmi >= 18.5 && bmi < 24.9) return 'Normal weight';
    if (bmi >= 25 && bmi < 29.9) return 'Overweight';
    return 'Obese';
}
