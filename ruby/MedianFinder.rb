class MedianFinder
    attr_accessor :array, :median
   
        def initialize
            self.array = []
            self.median = 0
        end
    
        def add_num(num)
             self.array.push(num)
        end
    
        def find_median()
            return 0 if self.array.empty?
            return self.median = self.array.sum / 2.to_f if self.array.length == 2
            num = 0
            if self.array.length.odd?
                num = self.array[self.array.length/2].to_f
            else
                num = self.array[self.array.length/2] + self.array[(self.array.length/2)-1].to_f
               
            end
            self.median = num
        end
    end

obj = MedianFinder.new()
obj.add_num(1)
obj.add_num(2)

obj.find_median()
p obj