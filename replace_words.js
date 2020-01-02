class Node {
    constructor(){
        this.children = {};
        this.endWord = false;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }

    insert(string, root = this.root) {
        if (string.length === 0) return;
        let letter = string[0];
        let rest = string.slice(1);

        if (!(letter in root.children)) root.children[letter] = new Node();
        if (rest.length === 0) root.children[letter].endWord = true;

        this.insert(rest, root.children[letter])
    }

    prefix(prefix, root = this.root, string = "") {
        
        let letter = prefix[0];
        let rest = prefix.slice(1);
        if (!(letter in root.children)) return "";
        string += letter
        if (root.children[letter].endWord) return string;

        return this.prefix(rest, root.children[letter], string);
    }
}


var replaceWords = function(dict, sentence) {
    let trie = new Trie();
    dict.forEach(word => trie.insert(word));
    let words = sentence.split(" ").map(word => {
        let prefix = trie.prefix(word);
        if (prefix != '') return prefix
        return word
    })
    return words.join(" ");
};

let trie = new Trie();
trie.insert('cat');
trie.insert('bat');
trie.insert('rat');

console.log(replaceWords(dict = ["cat", "bat", "rat"],
sentence = "the cattle was rattled by the battery"))

