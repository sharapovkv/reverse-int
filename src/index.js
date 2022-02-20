function reverse(num) {
    let tempNum = Math.abs(num);
    let result = "";

    while (tempNum) {
        result += tempNum % 10;
        tempNum = ~~(tempNum / 10);
    }

    return +result;
}

module.exports = reverse;
