# from lru folder we should import lru
from lru import lru

class lrutest:
    # constructor
    def lrutest(self):
        pass

    # in the main method created a obj for main method
    # the basic functionality is just like queue. its like first in first out.
    # i had written testcases like assuming by taking a list.
    def maintest(self):
        obj = lru(3)
        obj.put("youtube")
        assert obj.get("youtube") == "youtube","test case 1 is failed"
        print("test case 1 is passed")
        obj.put("msit")
        assert obj.get("msit") == "msit", "test case 2 is failed"
        print("test case 2 is passed")
        obj.put("wiki")
        obj.put("hackerrank")
        assert obj.get("youtube") == None , "test case 3 is failed"
        print("test case 3 is passed")
        print("done @ All test cases passed")

        # here printing the entire cache list
        print(obj.get_cache())


if __name__ == "__main__":
    obj = lrutest()  
    obj.maintest()      



