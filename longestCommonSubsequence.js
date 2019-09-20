var longestCommonSubsequence = function (text1, text2) {
    let result = 0;
    let max = text1.length > text2.length ? text1 : text2
    let min = text1.length > text2.length ? text2 : text1
    console.log(max)
    
    let results1 = new Map();
    
    for (let i = 0; i < min.length; i++) {
        
        
        for (let j = i; j < max.length; j--) {
            
        }
    }
    
    return results1.size()
};

console.log(longestCommonSubsequence("abc", "abcc"))