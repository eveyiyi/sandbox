/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

//define daily rate & total cost
let dailyRate = 0;
let totalCost = 0;
//define day elements
let Mon = document.getElementById('monday');
let Tue = document.getElementById('tuesday');
let Wed = document.getElementById('wednesday');
let Thu = document.getElementById('thursday');
let Fri = document.getElementById('friday');
//define clear button element
let clearButton = document.getElementById('clear-button');
//define full & half button elements
let fullButton = document.getElementById('full');
let halfButton = document.getElementById('half');



/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
function colorChangeDaysOfWeek() {
    this.classList.add("clicked");
}




/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

function clearDays() {
    //define the array of all the clicked days
    let clickedDays = document.querySelectorAll('.clicked');
    //use forEach() helper/method/function, remove 'clicked' class for all the clicked days one by one
    clickedDays.forEach(function(clickedDay) {
        clickedDay.classList.remove('clicked');
    });
    //reset calculated-cost & daily rate
    totalCost = 0;
    dailyRate = 0;
    calculate(0);
    //reset other relevant variables: id:full
    document.getElementById('full').classList.add('clicked');
}




/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
function changeRateHalf() { 
    dailyRate = 20;
    numberOfDays=document.querySelectorAll('.clicked').length;
    calculate(numberOfDays-1);
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

function changeRateFull() { 
    dailyRate = 35;
    numberOfDays=document.querySelectorAll('.clicked').length;
    calculate(numberOfDays-1);
}



/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate(days) { 
    totalCost = dailyRate * days;
    document.getElementById('calculated-cost').innerHTML = totalCost;
    console.log(days);
}
//trigger

//monitor the click event on all the day elements
Mon.addEventListener('click', colorChangeDaysOfWeek);
Tue.addEventListener('click', colorChangeDaysOfWeek);
Wed.addEventListener('click', colorChangeDaysOfWeek);
Thu.addEventListener('click', colorChangeDaysOfWeek);
Fri.addEventListener('click', colorChangeDaysOfWeek);
//monitor the click event on clear button
clearButton.addEventListener('click', clearDays);
//monitor the click event on half & full buttons
fullButton.addEventListener('click', changeRateFull);
halfButton.addEventListener('click', changeRateHalf);