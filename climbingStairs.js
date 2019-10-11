var climbStairs = function (n) {
    let table = new Array(n + 1);

    table[0] = 1;
    table[1] = 1;

    for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table

};

console.log(climbStairs(4))