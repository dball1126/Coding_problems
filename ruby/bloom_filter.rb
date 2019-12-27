=begin

Bloom Filter in Ruby

Bloom filters are a data structure where we can insert and lookup in constant time. The Space Complexity is also constant time.
Lookup only states the item may be in the filter...it is not definitive, and space is constant because we plan on how big it's going
to be before we create it....the size never changes and if for some reason we need more space we typically create other bloom filters.

We determine how many items(n) will be in our storage which is an array, next we determine our acceptable percentage of failure(p),
than we determine how many hash functions(k) we will use. There are number of formulas for determining each one...you can use
this online calculator: https://hur.st/bloomfilter/.

In this example we determine we have 5000 N items to insert in our filter, 4 K hash functions, and our acceptable loss of failure
is .01(1 percent) P failture. Insert this into the calculator and we get the size that our bloom filter needs to be which is
52,614 M bits. We round up and create an array storage size of 53000 items prefilled with a boolean value of false. Bloom filters
only store true or false values which is typically 1 bit in size, where other data structures store the entire string which take
up considerably more space, hence the reason why the space complexity is Constant.

We insert the item(string) in this case into our filter and for each element in the string we convert it to ASCII value and do 
a number of different unique operations(shifting bits, modding, multiplying, converting, and adding) for each hash function. Each hash
function is different in it's own way and ouputs a unique index(the same index every time when given the same string), and since we
are inserting we check each unique index in our storage and switch the boolean value to True.

The lookup method takes the string and goes through the different hash functions to get all of our unique indexes and then we
check our storage at those indexes for True values. If any of them are false it is guaranteed that the item is not in our filter.
However, if they are all true we output that it Might be in our filter, hence the reason why we called the method may_contain. 
The reason for this is because of collisions. Some other string may output the same index as other strings when going through our hash
functions, and when the filter starts getting full the chance of collisions increases.

Bloom filters are obviously for items or features that are not terribly important, such as showing relevent articles to a 
particular users search or view history. Special note that Bloom Filters have no delete method, once an item is inserted it
stays there. Because Bloom Filters only store true or false values in the array they save space compared to other structures.

=end




class BloomFilter 
    

    def initialize(size = 53000)
        if size > 53000 # This filter will maxout at 53000 items to guarantee 1% acceptable failure rate.
            @size = 53000
        else
            @size = size
        end
        @storage = []
        for index in 0..size do # Prefill indicies with default value of false.
            @storage.push(false)
        end
        @storage
    end

    
    def insert(item)
        hashed_values = self.get_hashed_values(item)
        hashed_values.each do |value|
            self.set_value(value)
        end
    end

    def may_contain(item)
        hashed_values = self.get_hashed_values(item)
        
        hashed_values.each do |value|
           return false if self.get_value(value) == false
        end

        return true
    end
    
    def get_hashed_values(item)
        [self.hash1(item), self.hash2(item), self.hash3(item), self.hash4(item)]
    end
    
    
    # Protect methods and getters and setters from outside access
    protected
    
    attr_accessor :size, :storage

    def get_value(index)
        @storage[index]
    end

    def set_value(index)
        @storage[index] = true
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

    def hash4(item)
        hash4 = 3399

        item.split("").each do |char|
            hash4 = (hash4 << 1) + char.ord * hash4
            hash4 = hash4 & 0xFFFF_FFFF #Convert to 32 bit signed integer
            hash4 = (hash4).abs
        end
        hash4 % self.storage.size
    end
end

obj = BloomFilter.new()
obj.insert("string")
obj.insert("computer")
obj.insert("hacker")


p obj.may_contain("string")  == true
p obj.may_contain("strin") == false

p obj.may_contain("computer")  == true
p obj.may_contain("comp") == false

p obj.may_contain("hacker")  == true
p obj.may_contain("hack") == false
