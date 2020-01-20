def all_paths_source_target(graph)
    visited = Set.new
    route, all_routes = []
    return route if == []

    for node in graph
        route.push
    end
end


def top_k_frequent(words, k)
   h = Hash.new 0    
   words.each { |w| h[w] += 1 }    
   h.sort_by { |k, v| [-v, k] }[0..k-1].map(&:first)    
 end  
