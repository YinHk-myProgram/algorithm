// use dynamic programming to find the Nth fibonacci number
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
