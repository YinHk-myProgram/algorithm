# Find Greatest common divisor (GCD) of the two integers


```py
gcd = 1  # Initial gcd is 1 
int k = 2  # Possible gcd 
while k <= n1 and k <= n2: 
    if n1 % k == 0 and n2 % k == 0: 
        gcd = k 
    k += 1 # Next possible gcd 
# After the loop, gcd is the greatest common divisor for n1 and n2 
```
