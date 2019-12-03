def is_valid(s)
    str = s
    return true if str.empty?
    open_hash = Hash.new
    open_hash["{"] = "{"
    open_hash["["] = "["
    open_hash["("] = "("
    close_hash = Hash.new
    close_hash["}"] = "}"
    close_hash["]"] = "]"
    close_hash[")"] = ")"
    pairs = Hash.new
    pairs["{}"] = "{}"
    pairs["[]"] = "[]"
    pairs["()"] = "()"

    return false if close_hash.has_key?(str[0])
    str = str.split("").slice(1, str.length)
    stack = [str[0]]
    while !str.empty?
        current = str.shift

        if close_hash.has_key?(current)
            p current
            p stack
            ele = stack.pop + current
        return false if !pairs.has_key?(ele)
        else
            stack.push(current)
        end
    end
    p stack
    stack.empty? ? true : false
end


p is_valid("()[]{}")