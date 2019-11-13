var strStr = function (haystack, needle) {
    if (needle.length > haystack.length) return -1;
    let check = "";
    let c = 0;
    for (let i = 0; i < haystack.length; i++) {
       if (haystack[i] !== needle[c]) continue;
       if (haystack[i] === needle[c]) {
           for (let j = i; j < needle.length + i; j++) {
               if (haystack[j] !== needle[c]) break
               if (check === needle) return i;

               check += haystack[j];
               c++;
           }
           c = 0;
           check = ""
       }
        
    }

    return -1;
};

console.log(strStr("mississippi", "issip"))