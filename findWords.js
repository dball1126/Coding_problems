var findWords = function (words) {
    let set1 = new Set(["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"]);
    let set2 = new Set(["a", "s", "d", "f", "g", "h", "j", "k", "l"]);
    let set3 = new Set(["z", "x", "c", "v", "b", "n", "m"]);

    let results = [];

    words.forEach(word => {
        chars = word.split("");
        let choice;
        console.log(chars)
        console.log(choice)
        for (let i = 0; i < chars.length; i++) {
            if (choice === undefined) {
                if (set1.has(chars[i]) || set1.has(chars[i].toLowerCase())) {
                    choice = set1;
                } else if (set2.has(chars[i]) || set2.has(chars[i].toLowerCase())) {
                    choice = set2;
                } else if (set3.has(chars[i]) || set3.has(chars[i].toLowerCase())) {
                    choice = set3;
                }
            } else if (choice.has(chars[i]) || choice.has(chars[i].toLowerCase())) {
                continue
            } else {
                choice = false;
                break
            }
        }
        if (choice !== false) results.push(word)
    })

    return results;
};

console.log(findWords(["Aasdfghjkl", "Qwertyuiop", "zZxcvbnm"]))