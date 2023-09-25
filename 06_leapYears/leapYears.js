const leapYears = function(year) {
    let remainder = year % 4;
    if (remainder === 0) {
        if (remainder % 100 === 0 && remainder % 400 !== 0) {
            return("Not leap year")
        }
        else {
            return("leap year")
        }
    }
    else {
        return("Not leap year");
    }
};

module.exports = leapYears;
