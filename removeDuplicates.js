var removeDuplicates = function (S) {
    let truthy = false;
    arr = S.split("");

    while (truthy === false) {
        truthy = true;
        let j = 1;
        let i = 0;
        while (j < arr.length) {
            if (arr[i] === arr[j]) {
                truthy = false;
                arr = arr.slice(0, i).concat(arr.slice(j + 1))
                break;
            }
            i++;
            j++;
        }
    }
    return arr.join("")
};


console.log(removeDuplicates("abbaca"))