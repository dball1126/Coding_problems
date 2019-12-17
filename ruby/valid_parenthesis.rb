def is_valid(s)
  stack = []

    (0...s.length).each do |i|
        current = s[i]
        if current == '}' 
            ele = stack.pop
            return false if ele != '{'
        elsif current == ')'
            ele = stack.pop
            return false if ele != '('
        elsif current == ']'
            ele = stack.pop
            return false if ele != '['
        else
            stack.push(current)
        end
    end
    stack.empty? ? true : false
end


p is_valid("{[]}")