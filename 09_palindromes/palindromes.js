const palindromes = function (str) {
    const punctuation = /[\.,?!\s]/g;
    let newText = str.toLowerCase().replace(punctuation, "");

    const reversedStr = newText.split("").reverse().join("");

    return newText === reversedStr;
};

// Do not edit below this line
module.exports = palindromes;
