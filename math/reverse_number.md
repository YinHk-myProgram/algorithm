# reverse number

```py
num = int(input("Enter an integer number : "))

# make a copy of num and store it in temp
temp = num

# initialize rev to 0 to store reverse of num
rev = 0

# loop until temp is greater than 0
while temp > 0:
# get last digit of temp
    ld = temp % 10      # eg: 123 -> 123%10 = 3, 12%10 = 2, 1%10 = 1

# add last digit to rev
    rev = rev * 10 + ld   # eg: 123 -> 0*10 + 3 = 3, 3*10 + 2 = 32, 32*10 + 1 = 321
# shift rev by 1 place to left and add last digit
    
# update temp by removing last digit
    temp //= 10          # eg: 123 -> 123//10 = 12, 12//10 = 1, 1//10 = 0

# print the reverse of num
print(f"Reverse of {num} is {rev}")


```
