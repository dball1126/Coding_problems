class BloomFilter 
    attr_accessor :size, :storage

    def initialize(size = 62000)
        if size > 62000
            @size = 62000
        else
            @size = size
        end
        @storage = create_storage(@size)
    end

    def create_storage(size)
        internal_storage = []

        for index in 0..size do
            internal_storage.push(false)
        end
        
    end

end

 p obj = BloomFilter.new(100)
p obj