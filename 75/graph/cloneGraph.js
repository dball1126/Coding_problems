// {
//     val: 1,
//         neighbors:
//     [{ val: 2, neighbors: [Array] },
//     { val: 4, neighbors: [Array] }]
// }


const cloneGraph = (graph) => {
let obj = {};
    for( n in graph) {
       let connected = [];
       n.forEach(node =>{
           connected.push(node);
       })
       obj[val] = n;
    
       
    }
    return obj;
}


console.log(cloneGraph({
     val: 1,
         neighbors:
     [{ val: 2, neighbors: [Array] },
     { val: 4, neighbors: [Array] }]
 }))