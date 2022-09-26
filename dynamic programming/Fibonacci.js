//  use dynamic programming to find the Nth fibonacci number

//Dynamic Programming- Bottom-Up Approach
const fibonacci = num => {
  let a = 1, b = 0, temp;

  while (num >= 0){
    temp = a;
    a = a + b;
    b = temp;
    num--;
  }

  return b;
}

//Dynamic Programming- Bottom-Up Approach
const fibBottomUp = (n, bottom_up = []) => {
     bottom_up[1] = 1;
     bottom_up[2] = 1;
     for (let i = 3; i <= n; i++) {
         bottom_up[i] = bottom_up[i - 1] + bottom_up[i - 2];
     }
     // bottom_up[]= 1, 2, 2, 3, 5.... till n
     // console.log(bottom_up);
     return bottom_up[n];
 }

// or
function  fib(n) {
        /* Declare an array to store Fibonacci numbers. */
        let f = new Array(n+2); // 1 extra to handle case, n = 0
        let i;
        /* 0th and 1st number of the series are 0 and 1*/
        f[0] = 0;
        f[1] = 1;
        for (i = 2; i <= n; i++) {
            /* Add the previous 2 numbers in the series
            and store it */
            f[i] = f[i-1] + f[i-2];
        }
        return f[n];
}
