const palindromes = function (str) {
    let letters = str.toLowerCase().split('').filter((letter) => RegExp(/^[a-zA-Z0-9]/,'u').test(letter))
    const limit = Math.floor(letters.length / 2);
    let rightSide = letters.length-1;
    for (let leftSide = 0; leftSide <= limit; leftSide++) {
        if (letters[leftSide] != letters[rightSide]) {
            return false;
        }
        rightSide--;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
