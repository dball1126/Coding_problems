var nextGreaterElements = function (nums) {
    let returnArr = [];


    for (i = 0; i < nums.length; i++) {
        currentEle = nums[i];
        let max = -1;
        let looped = false;
        nextEle = i+1;
        let newArr = [];
        if (nextEle === undefined) {
            newArr = nums;
        } else {
            newArr = nums.slice(nextEle)
           
            newArr = newArr.concat(nums.slice(0, nextEle))
        }
        
        for (j = 0; j < newArr.length; j++) {
            secondEle = newArr[j];
            
            if (secondEle > currentEle && looped === false) {
                max = secondEle
                looped = true;
            
            }
        }

        returnArr.push(max)
    }
    return returnArr
};

// console.log(nextGreaterElements([1, 8, -1, -100, -1, 222, 1111111, -111111]));

var nextGreaterElement = function (n) {
    let len = n.split("").length;
    let results = [];
  for (let i = 0; i < len; i++) {
      remainder = (n % 10);

      
  }
    
    
};

console.log(nextGreaterElement(12345))