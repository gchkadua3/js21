function calculate() {
    let kgValue = parseFloat(document.getElementById('kg-number').value);
    let cmValue = parseFloat(document.getElementById('cm-number').value);
    let result = document.querySelector('.final-result');
    let BMI = kgValue / ((cmValue/100) * (cmValue/100));

    if (BMI <= 18.4) {
        result.textContent = 'You are underweight.'
    } else if (BMI <= 24.9) {
        result.textContent = 'You are healthy.'
    } else if (BMI <= 29.9) {
        result.textContent = 'You are overweight.'
    } else if (BMI <= 34.9) {
        result.textContent = 'You are severely overweight.'
    } else if (BMI <= 39.9) {
        result.textContent = 'You are obese.'
    } else {
        result.textContent = 'You are severely obese.'
    }

    console.log(BMI);
}
