## Prime

An integer greater than 1 is prime if its only positive divisor is 1 or itself



### algorithm for the problem:
```
Set the number of prime numbers to be displayed as 
    a constant NUMBER_OF_PRIMES 
Use count to track the number of prime numbers and 
    set an initial count to 0 
Set an initial number to 2 
while count < NUMBER_OF_PRIMES: 
    Test if number is prime 
    if number is prime: 
        Display the prime number and increase count 
    Increment number by 1
```

```py
number = int(input("Enter an integer: "))

isPrime = True

for divisor in range(2, number // 2 + 1):
    if number % divisor == 0:
        isPrime = False
        break

if isPrime and number > 1:
    print("Prime")
else:
    print("Not prime")
```
