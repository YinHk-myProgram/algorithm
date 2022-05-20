//What is Recursion? 
//The process in which a function calls itself directly or indirectly is called recursion and the corresponding function is called as recursive function. Using recursive algorithm, certain problems can be solved quite easily.

//example:
def printFun(test):
 
    if (test < 1):
        return
    else:
 
        print(test, end=" ")
        printFun(test-1)  # statement 2
        print(test, end=" ")
        return

 

