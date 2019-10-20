text = "loonbalxballpoon";

const balloon = (text) => {
    let counter = 0;
    let map = new Map();
    text.split("").forEach(ele => map.has(ele) ? map.set(ele, map.get(ele) + 1) : map.set(ele, 1))
    
    let truthy = true;
    while (truthy) {
        let word = "balloon";

        for (let i = 0; i < word.length; i++) {
            let w = word[i];
            if (!map.has(w) || map.get(w) === 0) {
                return counter;
            } else {
                map.set(w, map.get(w)-1)
            }
        }
        counter++;
    }
}

console.log(balloon(text))