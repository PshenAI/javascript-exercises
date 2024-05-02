const reverseString = function(toReverse) {
    const splittedString = toReverse.split("");

    let res = "";
    for(let i = splittedString.length - 1; i >= 0; i--) {
        res += splittedString[i];
    }
    return res;
};

// Do not edit below this line
module.exports = reverseString;
