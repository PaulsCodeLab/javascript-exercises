const reverseString = function(str) {
    let reverseStr = [];
    for(letter of str){
        reverseStr.unshift(letter);
    }
    return reverseStr.join('');
};

// Do not edit below this line
module.exports = reverseString;
