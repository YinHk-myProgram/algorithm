// Reverse a String With Built-In Functions

const reverseString = function(str) {
  
   // use the split() method to return a new array
   let splitStringArr = str.split("");
  
   //  Use the reverse() method to reverse the new created array
   let reverseArray = splitStringArr.reverse();
   
   // Use the join() method to join all elements of the array into a string
   return reverseArray.join("");
}

// Reverse a String With a For Loop
function reverseStr(str) {
    let newString = "";
  
    for (let i=str.length - 1; i >= 0; i--) { 
       newString += str[i];      // or newString = newString + str[i];
    }
    return newString; 
}

// Reverse a String With Recursion
function reverseStri(str) {
     return (str === '') ? '' : reverseStri(str.substring(1)) + str.charAt(0);
}


