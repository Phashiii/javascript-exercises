const sumAll = function(num1, num2) {

    let sum = 0;
    let middleNum;
   
    if(num2 < num1)
    {
        middleNum = num2;
        num2 = num1;
        num1 = middleNum
    }
    if(num1 >= 0 && num2 >= 0 && typeof num1 === "number" && typeof num2 === "number")
    {    
        while (num1 <= num2 )
        {
            sum += num1;

            num1++;
        }
        return sum;
    }else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
