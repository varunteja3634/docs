var secondsPerMin = 60;
var minsPerHour = 60;
var hoursPerDay = 24;
var daysPerWeek = 7;
var weeksPerYear = 52;
var daysPerYear = 365;

var secondsPerDay = secondsPerMin*minsPerHour*hoursPerDay;
var myAge = 17;
var secondsAlive = (secondsPerDay*daysPerYear)*myAge;
document.write("i've been alive for " + secondsAlive);
