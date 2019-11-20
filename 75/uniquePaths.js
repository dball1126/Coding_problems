const uniquePaths = (m, n) => {
    let arr = [];
    console.log(n)
    for (let i = 0; i < n; i++) {
        let newArr = Array(m).fill(0);
        arr.push(newArr);
    }
    arr[0][0] = 1
    arr[n-1][m=1] = 1
    let path = [];
    let allPaths = [];
    let start = undefined;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (start === undefined) start = arr[0][0];

        }        
    }
    console.log(arr)
}

console.log(uniquePaths(m=3, n=2));