let graph = {
    'A': ['B', 'D', 'E'],
    'B': ['C'],
    'C': ['D', 'E'],
    'D': ['C', 'E'],
    'E': ['B']
};

function maxNumOfTrips(start, end, graph) {

    function search(node, visited, end) {
        graph[node].forEach(ele => {
            if (visited.length > 2 || visited.includes(ele)) return;
            if (ele !== end) {
                let el;
                // console.log(visited);
                el =  search(ele, [...visited, ele], end)
                    console.log(el);
                    return el;
                ;}
                routes.push([...visited, ele].join(''));
        });
    }
    const routes = [];
    search(start, visited = [], end)
    return routes;
}


// function search(start, end, graph) {
    
//     let queue = [...graph[start]];
//     let visited =  [];
//     while (queue.length) {
//       count = 1;
//       let node = queue.shift();
//       if (graph[node]){
//           let answer = recursiveStep(node, end, graph, str = node, visit = new Set(), nodes = []);
//           if (answer){
//               visited.push(answer);
//             }
//         }
//     }
//     return visited;
// }

// function recursiveStep(start, end, graph, str, visit, nodes) {   
//     if (end === start) {
//         if (str.length < 4  && !visit.has(str)) {
//             visit.add(str)
//             return str
//         };
//     }

    
//     if (str.length > 4) return str = ""; 
//     nodes.push(...graph[start])
//     while (nodes.length) {
//         start = nodes.shift();
//         str += start

//          return recursiveStep(start, end, graph, str, visit, nodes)   
//     }
//     return visit
// }

// function upToRoute(start, end, graph, count){
//     let children = [...graph[start]];
//     let collection = [];
//     let oldCount = count;
//     let visited = new Set();
//     if(children[0] === end) visited.add([children[0]]);
//     while (children.length){
//     let route = [start];    
//     let queue = [children.shift()];
//     count = oldCount;

//     while (queue.length){
//         let child = queue.shift();

//         route.push(child);
//         count +=1;
//         if (count > 4) {
//             // if (visited.has(route.join(""))) break
//             continue;}
//         if (child === end && count <= 4){
//             collection.push(count);
//             console.log(route);
//             route = [start];
//             visited.add(route.join(""));
            
//         }
//         if (graph[child] && !visited.has(route.join(""))){
//             queue.push(...graph[child]);
//         }

//     }
//     }
//     console.log(visited)
//     if (collection.length) return collection;
//     return false;
// }


// function exactRoute(start, end, graph, count) {
//     let children = [...graph[start]];
//     let collection = [];
//     let oldCount = count;
//     while (children.length) {
//         let visited = new Set();
//         let queue = [children.shift()];
//         while (queue.length) {
//             let child = queue.shift();
//             count += 1;
//             if (child === end && count === 4) {
//                 collection.push(count);
//                 count = oldCount;
//                 break;
//             } else if (child === end) {
//                 count = oldCount;
//                 break;
//             }
//             if (graph[child] && !visited.has(child)) {
//                 queue.push(...graph[child]);
//             }
//             visited.add(child);

//         }
//     }

//     if (collection.length) return collection;
//     return false;
// }



// console.log(search('A', 'E', graph));






console.log(maxNumOfTrips('C', 'C', graph));