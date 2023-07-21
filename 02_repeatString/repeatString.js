const repeatString = function(word, count) {
   

    let output = "";
    if(count < 0)
    {
        output = "ERROR";
        return output;
    }else
    {
        while(count> 0)
        {
            output += word;

            count--;
        }
        return output;
    }  
    
};

// Do not edit below this line
module.exports = repeatString;
