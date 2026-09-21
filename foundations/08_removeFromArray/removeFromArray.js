const removeFromArray = function(arr) {
    const args = Array.from(arguments);
    for (arg of args)
    {
        while(arr.includes(arg)){
            arr.splice(arr.indexOf(arg), 1) 
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
