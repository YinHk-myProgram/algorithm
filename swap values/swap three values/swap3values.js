/* Using Arithmetic Operators */
//Time Complexity: O(1)
//Auxiliary Space: O(1)

function arithmeticSwap(){ 
    // Store sum of all in a
    a = a + b + c;
 
    // After this, b has value of a
    b = a - (b + c);
 
    // After this, c has value of b
    c = a - (b + c);
 
    // After this, a has value of c
    a = a - (b + c);
  
}

/* Using Bitwise XOR */
//Time Complexity: O(1)
//Auxiliary Space: O(1)

function bitWiseSwap(){
    // Store XOR of all in a
    a = a ^ b ^ c;
 
    // After this, b has value of a
    b = a ^ b ^ c;
 
    // After this, c has value of b
    c = a ^ b ^ c;
 
    // After this, a has value of c
    a = a ^ b ^ c;
  
}

