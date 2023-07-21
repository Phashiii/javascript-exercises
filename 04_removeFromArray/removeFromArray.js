const removeFromArray = function(list, ...theArgs) {

    for (let i = 0; i < theArgs.length; i++)
    {
        for (let j = 0; j < list.length; j++)

        if(list[j] === theArgs[i])
        {
            list.splice(j, 1);
        }
    }
    return list;
};

// Do not edit below this line
module.exports = removeFromArray;
