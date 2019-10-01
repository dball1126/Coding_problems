
function towersOfHanoi(n){
    let first = [];
    let second = [];
    let third = [];

    for (let i = n; i >= 1; i--) {
        first.push(i)
    }
    console.log(first)
}

console.log(towersOfHanoi(10))