def unique_paths(m, n)
    set, path, c, r = {}, [], 0, 0
    grid = Array.new(n){Array.new(m, 0)}
    grid[n-1][m-1] = "end"
    def help(grid, set, path, c, r)
        return if set.has_key?(path)
        if grid[c][r] == "end"
            set[path] = path
        end
        path.push([1,2])
        if r + 1 < grid[0].length && !set.has_key?(path)
            help(grid, set, path, c, r+1)
        end
        
        if c + 1 < grid.length && !set.has_key?(path)
            help(grid, set, path, c+1, r)
        end

    end

    help(grid, set, path, c, r)

    return set.values.count
end


p unique_paths(10, 10)