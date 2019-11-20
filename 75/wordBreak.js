

var wordBreak = function (s, wordDict) {
    
    for (let i = 0; i < wordDict.length; i++) {
        let str = s;
        let arr = wordDict.slice(i, wordDict.length);
        arr.forEach(e => {
            str = str.split(e).join("");
            if (str.length === 0) return true;

        })
        if (str.length === 0) return true;
    }
    return false;
};

console.log(wordBreak("cars", ["car", "ca", "rs"]))