function staircase(n) {
    let str = "";
    let stairs = "";
    for(let i = 0; i < n; i++){    
        str+=" ";
        stairs+="#";
    }
    
    for(let i = n-1; i >=  0; i--){ 
        console.log(str.slice(0, i) + stairs.slice(i))
    }
    
}


console.log(staircase(4))