def max_dist_to_closest(seats)
    max = 0;
    sum = 0;
    start = 0;
    finish = 0;

    (0...seats.length).each do |i|
        current = seats[i]

        if seats[(seats.length-1) - i] == 0
            finish += 1
        else
            finish = 0
        end
        p max
        if (current == 0)
            sum += 1
            start += 1
            max = [max, (sum / 2.to_f).ceil, start, finish].max
        else
            sum = 0
            start = 0
        end

       start = 0 if seats[0] == 0
       finish = 0 if seats[seats.length-1] == 0
    end

   return max
end


p max_dist_to_closest( [1,0,0,0,1,0,1])