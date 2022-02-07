/* Swap three variables by third variable */
public SwapThreeVariables() {
  
    int a, b, c, temp;
    swap = a;
    a = b;
    b = c;
    c = swap;

}

/* Swap three variables without using temporary variable */

//Using Arithmetic Operators
class Swap {
  
    static int a, b, c;
 
    // Assign c's value to a, a's value
    // to b and b's value to c.
    static void swapThree() {
             
        // Store sum of all in a
        // (a = 60)
        a = a + b + c;
     
        // After this, b has value of a
        // (b = 60 - (20 + 30) = 10)
        b = a - (b + c);
     
        // After this, c has value of b
        // (c = 60 - (10 + 30) = 20)
        c = a - (b + c);
     
        // After this, a has value of c
        // (a = 60 - (10 + 20) = 30)
        a = a - (b + c);
    }
 
    // Driver Code
    public static void main(String []args) {
      
        a = 10; b = 20; c = 30;
        System.out.println("Before swapping a = " +
                                 a + ", b = " + b +
                                     ", c = " + c);                      
        // Calling Function
        swapThree();
        System.out.println("After swapping a = " +
                                a + ", b = " + b +
                                    ", c = " + c);
      
    }
}

//Using Bitwise XOR
class Swap {
  
    static int a, b, c;
 
    // Assign c's value to a, a's value
    // to b and b's value to c.
    static void swapThree() {
        // Store XOR of all in a
        a = a ^ b ^ c;
 
        // After this, b has value of a
        b = a ^ b ^ c;
 
        // After this, c has value of b
        c = a ^ b ^ c;
 
        // After this, a has value of c
        a = a ^ b ^ c;
    }
 
    // Driver Code
    public static void main(String[] args) {
        a = 10;
        b = 20;
        c = 30;
        System.out.println("Before swapping a = " + a +
                           ", b = " + b + ",c = " + c);
 
        // Calling Function
        swapThree();
        System.out.println("After swapping a = " + a +
                           ", b = " + b + ", c = " + c);
    }
}



