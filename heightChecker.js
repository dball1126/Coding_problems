var heightChecker = function (heights) {
    let count = 0;
    let sorted = heights.slice(0)
    sorted = sorted.sort(function (a, b) { return a - b })
    console.log(sorted)
    console.log(heights)
    for (let i = 0; i < heights.length; i++) {
        if (heights[i] !== sorted[i]) count++;
    }
    return count;
};

arr = [7, 4, 5, 6, 4, 2, 1, 4, 6, 5, 4, 8, 3, 1, 8, 2, 7, 6, 3, 2]
console.log(heightChecker(arr))