
def FirstFactorial(num): 

    # code goes here 
    return FirstFactorialWithA(num, 1)

def FirstFactorialWithA(num, acu):
    if num <= 0:
        return 1
    if num == 1:
        return acu
    return FirstFactorialWithA(num - 1, acu*num);
    
# keep this function call here  
print FirstFactorial(-1)
