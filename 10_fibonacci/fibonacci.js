const fibonacci = function(arg) {
    num = Number(arg);

    if(num < 0) {
        return 'OOPS';
    } else if(num === 1 || num === 2) {
        return 1;
    } else if(num === 0) {
        return 0;
    }

    let fibonacciNum = 1;
    let previousNum = 1;

    for (let i = 0; i < num - 2; i++) {
        let temp = fibonacciNum;
        fibonacciNum += previousNum;
        previousNum = temp;
    }

    return fibonacciNum;
};

// Do not edit below this line
module.exports = fibonacci;
