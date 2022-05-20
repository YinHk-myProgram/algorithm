/*
   In Insertion sort, you compare the key element with the previous elements. If the previous elements are greater than the key element, then you move the previous element to the next position.

   Start from index 1 to size of the input array.
   
 */
 

function insertionSort(arr) {
    let n = arr.length;
        for (let i = 1; i < n; i++) {
            // Choosing the first element in our unsorted subarray
            let key = arr[i];
            // The last element of our sorted subarray
            let j = i-1; 
            
            // Compare key with each element on the left of it until an element smaller than
            // it is found.
            // For descending order, change key<array[j] to key>array[j].
            while ((j > -1) && (key < arr[j])) {
                arr[j+1] = arr[j];
                j--;
            }
            // Place key at after the element just smaller than it.
            arr[j+1] = key;
        }
   
    return inputArr;
}

