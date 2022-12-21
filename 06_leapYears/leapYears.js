const leapYears = function(x) {
    //if % is greater than 0  is not leap year?
    //if % after being divided by 100 is 0 
    if(x % 400 == 0 && x % 100 == 0) {
        return true;
    }else if (x % 400 !== 0 && x % 100 == 0) {
        return false;
    }else if (x % 4 == 0) {
        return true;
    }else {
        return false;
    }
};

// Do not edit below this line
module.exports = leapYears;
