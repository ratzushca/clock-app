

// Script to print the clock


function currentTime() {

    var   clock = new Date();
    var	Hour = clock.getHours() > 12 ? clock.getHours() - 12 : (clock.getHours() < 10 ? clock.getHours() : clock.getHours());
    var	M = clock.getMinutes() < 10 ? clock.getMinutes() : clock.getMinutes();
    var   S = clock.getSeconds() < 10 ? clock.getSeconds() : clock.getSeconds();
    var	dayNight = clock.getHours() > 12 ? "PM" : "AM";

    // print 0 in front of numbers < 10 

    if (Hour < 10) {Hour = "0"  + Hour};
    if (M < 10) { M = "0"  + M};
    if (S < 10) { S = "0"  + S};

    // print the clock

    document.getElementById("hour").textContent = Hour + ":" + M + ":" + S + " " + dayNight;

}
// make the clock tick
setInterval(currentTime,1000);


// Format Date with Ordinal Number Suffix

const formatDate = function(d) {
    if (d > 3 && d < 21) return 'th';
    switch (d % 10) {
        case 1:  return "st";
        case 2:  return "nd";
        case 3:  return "rd";
        default: return "th";
    }
};

//script for printing day-month-year

function currentDate() {
    const monthNames = [ "JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE",
                   "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER" ];
    const days = ['SUNDAY','MONDAY','TUESDAY','WEDNESDAY','THURSDAY','FRIDAY','SATURDAY'];                       
    var today = new Date();
    var dd   = today.getDate(); 
    var mm   = monthNames[today.getMonth()]; //prints December
    var yyyy = today.getFullYear();//prints 2021
    var day  = days[today.getDay()] + ","; //prints day of the week
    today =  " " + mm + " " + dd+ formatDate(dd) + " " + yyyy;
    
    //print day month year
    document.getElementById("date").textContent = day+today;

}
currentDate();


