class lru:
    # this is how constructor is initialised in python
    # here self is the self reference in python. in java we use this keyword
    def __init__(self,size):

        self.size = size
        self.lru = []


    def put(self,item):

        if(len(self.lru) < self.size):
            if item in self.lru:
                self.lru.remove(item)
                self.lru.append(item)
            else:
                self.lru.append(item)
        else:
            self.lru.pop(0)
            self.lru.append(item)                 

    def get(self,item):
        if item in self.lru:
            return item
        else:
            return None    

    def get_cache(self):

        return self.lru