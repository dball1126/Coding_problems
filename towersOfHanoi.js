var TowersOfHanoi = function (n) {
    this.first = [];
    this.second = [];
    this.third = [];
    for (var i = n; i >= 1; i--) {
        this.first.push(i);
    }
};

const th = new TowersOfHanoi(5)

function tower(n, sourceRod, auxiliaryRod, destinationRod){
    
    while (destinationRod.length !== n) {
        if (sourceRod.length) {
            let val = sourceRod.pop();
            auxiliaryRod.push(val)
            destinationRod.push(auxiliaryRod.pop())
        }

    }

    return this;
}

console.log(tower(5, th.first, th.third, th.second))
