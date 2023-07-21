const reverseString = function(stringtoReverse) {

    let counter = 0;
    let counter2 = 0;
    let characters = [];
    let reversedCharacters = [];
    let reversedString = "";

    while(counter < stringtoReverse.length)
    {
        characters[counter] = stringtoReverse.charAt(counter);

        counter ++;
    }

    let index = characters.length -1;
    while(counter2 < characters.length)
    {
        reversedCharacters[counter2] = characters[index];

        index--;
        counter2++;
    }

    for(const chars of reversedCharacters){
        reversedString += chars;
    }

    return reversedString
};

// Do not edit below this line
module.exports = reverseString;
