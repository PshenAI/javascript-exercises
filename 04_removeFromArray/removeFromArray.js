const removeFromArray = function(array, ...args) {
    return array.filter(a => !args.includes(a));
};

// Do not edit below this line
module.exports = removeFromArray;
