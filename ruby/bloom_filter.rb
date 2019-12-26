class BloomFilter 
    attr_accessor :size, :storage

    def initialize(size = 62000)
        if size > 62000
            @size = 62000
        else
            @size = size
        end
        @storage = []
        for index in 0..size do
            @storage.push(false)
        end
    end

    def get_value(index)
        @storage[index]
    end

    def set_value(index)
        @storage[index] = true
    end

    def insert(item)
        hashed_values = self.get_hashed_values(item)
    end

    def get_hashed_values(item)
        [self.hash1(item), self.hash2(item), self.hash3(item)]
    end

    def hash1(item)
        hash1 = 0

        item.split("").each do |char|
            hash1 = (hash1 << 3) + char.ord + hash1
            hash1 = hash1 & 0xFFFF_FFFF #Convert to 32 bit signed integer
            hash1 = (hash1).abs
        end
        hash1 % self.storage.size
    end

    def hash2(item)
        hash2 = 6731

        item.split("").each do |char|
            hash2 = char.ord + hash2
            hash2 = hash2 & 0xFFFF_FFFF #Convert to 32 bit signed integer
            hash2 = (hash2).abs
        end
        hash2 % self.storage.size
    end

    def hash3(item)
        hash3 = 0

        item.split("").each do |char|
            hash3 = (hash3 << 5) + char.ord - hash3
            hash3 = hash3 & 0xFFFF_FFFF #Convert to 32 bit signed integer
            hash3 = (hash3).abs
        end
        hash3 % self.storage.size
    end
end

 p obj = BloomFilter.new(100)
p obj.set_value(0)
p obj.hash3("str")