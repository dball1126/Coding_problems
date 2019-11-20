/*
Given two strings text1 and text2, return the length of their longest common subsequence.

A subsequence of a string is a new string generated from the original string with some characters(can be none) deleted without changing the relative order of the remaining characters. 
(eg, "ace" is a subsequence of "abcde" while "aec" is not). 
A common subsequence of two strings is a subsequence that is common to both strings.
*/

var longestCommonSubsequence = function (text1, text2) {
    let seq = "";
    let long = text1.length >= text1.length ? text1 : text2;
    let short = text1.length >= text1.length ? text2 : text1;
    let texter = short.split("");
    for (let i = 0; i < long.length; i++) {
        let curr = long[i];
        for (let j = 0; j < texter.length; j++) {
           if (curr === texter[j]) {
            if (seq[seq.length-1] && seq.indexOf(seq[seq.length-1]) > j )
               seq += texter[j]
           } else if (seq.length === 0) {
               seq += texter[j]
           }
        }
    }
    return seq.length;
};

console.log(longestCommonSubsequence("ezupkr"
,"ubmrapg"))