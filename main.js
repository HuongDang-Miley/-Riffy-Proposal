
const bmiStates = require ('./bmiStates.js');
const waterIntake = require ('./water-intake.js');
const calCalculation = require ('./calCalculation.js');

function getInput(i) {
    return process.argv[i + 2];
  }

// Get user input:
  const gender = getInput(0);
  const height = getInput(1);
  const currentWeight = getInput(2);
  const goalWeight = getInput(3);
  const age = getInput(4);
  const activity = getInput(5);
  const rate = getInput(6);
  
if (!gender || !height || !currentWeight || !goalWeight || !age || !activity || !rate) {
    console.log(
        'Enter data in this sequence:','\n',
        '1/ Gender (m/f)','\n',
        '2/ Height (cm)', '\n',
        '3/ Current weight (kg)','\n',
        '4/ Goal Weight (kg)', '\n',
        '5/ Age','\n',
        '6/ Activity level: (pick one)', '\n',
        ' • sendentary (little - no exercise)', '\n',
        ' • light (1-3 times/week)', '\n',
        ' • moderate (4-5 times/week)', '\n',
        ' • active (daily and intense)', '\n',
        '7/ Weight to lose per week (pick one):', '\n',
        ' • 0.25kg', '\n',
        ' • 0.5kg', '\n',
        ' • 1kg', '\n',
        )
}
    
if (gender && height && currentWeight && goalWeight && age && activity && rate) {
        // Print BMI statement
        console.log(
        '== Result:==', '\n',
        bmiStates(currentWeight, height),'\n', 
        // Print Water recommendation 
        waterIntake(currentWeight),'\n',
        // Print statement
        calCalculation(gender, height, currentWeight, goalWeight, age, activity, rate))
}







