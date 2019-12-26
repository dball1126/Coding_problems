class BloomFilter 
    attr_accessor :size, :storage

    def initialize(size = 62000)
        if size > 62000
            self.size = 62000
        else
            self.size = size
        end
        self.storage = create_storage
    end

    def create_storage(size)
        
    end

end