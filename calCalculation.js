
function bigFunction(gender, height, currentWeight, goalWeight, age, activity, rate) {
    
    // Calculate BMR (Basal Metabolic Age) Calories needed base on body metabolism rate
    function bmrByGender() {
        let bmr = (10 * currentWeight) + (6.25 * height) - (5 * age);
        switch(gender) {
            case 'f': return (bmr - 161);
            case 'm': return (bmr + 5);
            }
    }          
    const bmr = bmrByGender();
                
    // calculate calories/day to maintain current weight base on bmr and activity level
    function bmrAddActivity() {
        switch(activity) {
            case 'sedentary': return Math.round(bmr * 1.2)
            case 'light': return Math.round(bmr * 1.38)
            case 'moderate': return Math.round(bmr * 1.46)
            case 'active': return Math.round(bmr * 1.55)
        }
    }
    const calToRemainWeight =  bmrAddActivity()

    
    // Caculate the different calories/day needed to gain/lose weight (1100 cal/day = 1kg/week)
    function calDifferent() {
        return rate * 1100
    }
    
    // weeks to gain/lose weight:
    function totalTime() {
        const time = (Math.abs(currentWeight - goalWeight) / rate);
        time; 
        const weeks = Math.floor(time)
        const days = Math.ceil((time - weeks) * 7)
        if (weeks > 1 && days > 1 ) {
            return   weeks + ' weeks and ' + days + ' days'
        } else if (weeks <= 1) {
            return days + ' days'
        } else if (days === 0) {
            return  weeks + ' weeks'
        } 
    }
    const printTotalTime = totalTime();

    // Caculate final calories/per day to gain/lose weight
    function finalCal(){
        if (currentWeight < goalWeight) {
            return calToRemainWeight + calDifferent()
        } else if (currentWeight > goalWeight) {
            return calToRemainWeight - calDifferent()
        } return calToRemainWeight
    } 
    const finalCalories = finalCal();

    // Statement for each condition
    function statement() {
        if (currentWeight < goalWeight) {
            return 'To gain ' + rate + ' kg per week. Your calories intake is ' + finalCalories + ' a day. At this rate, you will achieve goal weight of ' + goalWeight + 'kg in ' + printTotalTime
        } else if (currentWeight > goalWeight) {
            return 'To lose ' + rate + ' kg per week. Your calories intake is ' + finalCalories + ' a day. At this rate, you will achieve goal weight of ' + goalWeight + 'kg in ' + printTotalTime 
        } return 'To main tain ' + currentWeight + ' kg. Your calories intake is ' + finalCalories + ' a day.' 
    }
    return statement();
}

module.exports = bigFunction;    
    
