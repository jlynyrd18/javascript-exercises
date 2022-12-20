const sumAll = function(num1, num2) {
    //Number.isInterger() in if else loop?
    //run for loop if numbers are ints
    //else return error
    //!== NaN?
    let total = 0;
    if (typeof num1 == "number" && typeof num2 == "number") {
        if (num1 >= 0 && num2 >= 0) {
            if (num1 < num2){
                for (let i = num1; i <= num2; i++) {
                    total += i
                }
            }else if  (num1 > num2) {
                for (let i = num2; i <= num1; i++) {
                    total += i
                }
            }
        }else {
            return "ERROR"
        }
    }else {
        return "ERROR"
    }
    
    
    
    return total;
};

// Do not edit below this line
module.exports = sumAll;
