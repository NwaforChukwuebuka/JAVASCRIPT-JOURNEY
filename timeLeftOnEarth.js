function timeLeft(age){

    var timeLeft = 90 - age;
    
    var timeIndays = timeLeft * 365;
    var timeInWeeks = timeLeft * 52;
    var timeInMonths = timeLeft * 12;

    console.log("You have " + timeIndays + " days, " + timeInWeeks + " weeks, and " + timeInMonths + " Months left" );
    
}

timeLeft(12);
