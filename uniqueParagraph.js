//Out the largest number of unique characters without letting
//the length drop to 0.

const paragraph = "If you want to jumpstart the process of talking to us about this role, here’s a little challenge: write a program that outputs the largest unique set of characters that can be removed from this paragraph without letting its length drop below 50.";

const uniqueSet = (paragraph) => {
    let map = {};
    let arr = paragraph.split(" ").join("").split("");
    arr.forEach(char => {
        if (map[char]){
            map[char] += 1;
        } else {
            map[char] = 1;
        }
    });
    let clone = new Map(map);
    
    let length = arr.length;
    // while (length > 50){
        let entries = map;
        for (let i = arr.length; i > 0; i--) {
            let char = arr[i];
            if (!map.has(char)) continue;
            let val = map.get(char);
            if (length - val >= 50){
                length -= val;
                map.delete(char)
            }    
            
        }
        console.log(clone);
        
    // }
    return map;
}

console.log(uniqueSet(paragraph));