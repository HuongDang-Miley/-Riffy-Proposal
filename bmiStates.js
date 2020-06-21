function bmiStates(currentWeight, height){
    const bmi = (currentWeight / Math.pow(height/100 , 2)).toFixed(1)
    if (bmi < 18.5) {
        return '• Your BMI is ' + bmi + '. You are underweight.'
    } else if (18.5 <= bmi && bmi < 24.9) {
        return '• Your BMI is ' + bmi + '. You are normal and healthy.'
    } else if (25 <= bmi && bmi < 29.9) {
        return 'Your BMI is ' + bmi + '. You are overweight.'
    } else if (30.0 <= bmi) {
        return '• Your BMI is ' + bmi + '. You are overweight Obese.'
    }
}

module.exports = bmiStates;
