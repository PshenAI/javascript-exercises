const sumAll = function(initNum, lastNum) {
    if((initNum < 0 || lastNum < 0) ||
        (typeof initNum !== "number" || typeof lastNum !== "number")) {
        return "ERROR";
    }

    if(initNum > lastNum) {
        let buffer = lastNum;
        lastNum = initNum;
        initNum = buffer;
    }

    let sum = initNum;

    for (let i = initNum + 1; i <= lastNum; i++) {
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
