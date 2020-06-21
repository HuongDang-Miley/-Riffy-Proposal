function waterIntake(currentWeight){
    const litres = (currentWeight/30).toFixed(1)
    return '• You should drink at least ' + litres + ' litres per day.'
} 

module.exports = waterIntake;