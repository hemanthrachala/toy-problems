class lru:
    # this is how constructor is initialised in python
    # here self is the self reference in python. in java we use this keyword
    def __init__(self,size):

        self.size=size
        self.lru = []