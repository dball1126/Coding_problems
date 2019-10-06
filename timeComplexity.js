function funny(n)
{
    let j = 1, h = 1;
    for (h = 1; h <= n; h += j) {
        j++;
        console.log(j)

    }
    
} 

function fun(n) {
    let i = 1, s = 1;
    while (s <= n) {
        i++;
        s += i;
        console.log(i)
    }
} 



console.log(funny(64))