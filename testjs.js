function fun(n){
    let count = 0;
    for(I = 0; I < n; I++) {
        for(j = 0; j < n; j = j / 2) {
            count += I + j;
        }
    }
    return count;
}

console.log(fun(100));