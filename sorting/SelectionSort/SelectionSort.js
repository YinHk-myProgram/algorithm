/*

  !. Find the smallest element in the array and swap it with the first element.
  2. Find the second smallest element and swap with with the second element in the array.
  3. Find the third smallest element and swap wit with the third element in the array.
  4. Repeat the process of finding the next smallest element and swapping it into the correct position until the entire array is sorted.

*/

function selectionSort(arr) { 
    let n = arr.length;
        
    for(let i = 0; i < n; i++) {
        // Finding the smallest number in the subarray, default index of min is in i
        let min = i;
        for(let j = i+1; j < n; j++){
            if(arr[j] < arr[min]) {
                min = j;             // change the index of min to j
            }
         }
         
         if (min != i) {
             // Swapping the elements
             let tmp = arr[i]; 
             arr[i] = arr[min];
             arr[min] = tmp;      
        }
    }
    return arr;
}

