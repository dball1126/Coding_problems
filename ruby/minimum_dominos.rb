def min_domino_rotations(a, b)
 aHash = Hash.new(0)
 bHash = Hash.new(0)

 min = Float::INFINITY

 a.each{|x| aHash[x] += 1}
 b.each{|x| bHash[x] += 1}

 (0...a.length-1).each do |i|
    ele1 = a[i]
    ele2 = b[i]

    if bHash[ele1].has_key?(ele1) && aHash[ele1] + bHash[ele1] >= a.length

        min = [min, a.length % ([aHash[ele1], bHash[ele1]].max)].min
    end
    
    if aHash[ele2].has_key?(ele2) && bHash[ele2] + aHash[ele2] >= b.length

        min = [min, b.length % ([bHash[ele2], aHash[ele2]].max)].min
    end
end
    
    min == Float::INFINITY ? -1 : min

end


p min_domino_rotations(A = [2,1,2,4,2,2], B = [5,2,6,2,3,2])