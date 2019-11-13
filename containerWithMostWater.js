// a = w * l
var maxArea = function (height) {
    let area = 0;
    if (height.length === 2) return Math.min(...height)

    for (let i = 0; i < height.length; i++) {
        const element = height[i];
        for (let j = i; j < height.length; j++) {
            let newArea = (Math.min(element, height[j]) * (j-i))
            area = Math.max(area, newArea)            
        }
    }
    return area;
};


console.log(maxArea(
    [1, 2,1]));