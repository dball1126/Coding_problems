let graph2 = {
    'A': ['B', 'D', 'E'],
    'B': ['C'],
    'C': ['D', 'E'],
    'D': ['C', 'E'],
    'E': ['B']
};

function breadthFirstSearch(start, end, graph) {
    let queue = [...graph[start]];
    let visited =  [];
    let nodeVisited = new Set();
    let count = 0;
    let oldcount = 0;
    while (queue.length) {
      count = 1;
      let node = queue.shift();
      if (graph[node]){
          let answer = route(node, end, graph, count);
          if (answer){
            visited.push(...answer);
          }
      }
    }
    return visited;
}

function route(start, end, graph, count){
    let children = [...graph[start]];
    let collection = [];
    let oldCount = count;
    while (children.length){
    let visited = new Set();    
    let queue = [children.shift()];
    while (queue.length){
        let child = queue.shift();
        count +=1;
        if (child === end && count <= 3){
            collection.push(count);
            count = oldCount;
            break;
        }
        if (graph[child] && !visited.has(child)){
            queue.push(...graph[child]);
        }
        visited.add(child);

    }
    }

    if (collection.length) return collection;
    return false;
}


console.log(breadthFirstSearch('C', 'C', graph2));