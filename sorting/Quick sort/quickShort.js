/*
   The steps involved in Quick Sort are:
   - Choose an element to serve as a pivot, in this case, the last element of the array is the pivot.
   - Partitioning: Sort the array in such a manner that all elements less than the pivot are to the left, and all elements greater than the pivot are to the right.
   - Call Quicksort recursively, taking into account the previous pivot to properly subdivide the left and right arrays. (A more detailed explanation can be found in the comments below)
   
 */

/* 

   quickSort(array, leftmostIndex, rightmostIndex)
      if (leftmostIndex < rightmostIndex)
         pivotIndex <- partition(array,leftmostIndex, rightmostIndex)
         quickSort(array, leftmostIndex, pivotIndex - 1)
         quickSort(array, pivotIndex, rightmostIndex)

   partition(array, leftmostIndex, rightmostIndex)
      set rightmostIndex as pivotIndex
      storeIndex <- leftmostIndex - 1
      for i <- leftmostIndex + 1 to rightmostIndex
      if element[i] < pivotElement
         swap element[i] and element[storeIndex]
         storeIndex++
      swap pivotElement and element[storeIndex+1]
   return storeIndex + 1
   
*/
 
 const quickSort = (arr, start, end) => {

  if(start < end) {

    // You can learn about how the pivot value is derived in the comments below
    let pivot = partition(arr, start, end);

    // Make sure to read the below comments to understand why pivot - 1 and pivot + 1 are used
    // These are the recursive calls to quickSort
    quickSort(arr, start, pivot - 1);
    quickSort(arr, pivot + 1, end);
  } 

}

const partition = (arr, start, end) => { 
  let pivot = end;
  // Set i to start - 1 so that it can access the first index in the event that the value at arr[0] is greater than arr[pivot]
  // Succeeding comments will expound upon the above comment
  let i = start - 1,
      j = start;

  // Increment j up to the index preceding the pivot
  while (j < pivot) {

    // If the value is greater than the pivot increment j
    if (arr[j] > arr[pivot]) {
      j++;
    }

    // When the value at arr[j] is less than the pivot:
    // increment i (arr[i] will be a value greater than arr[pivot]) and swap the value at arr[i] and arr[j]
    else {
      i++;
      swap(arr, j, i);
      j++;
    }
  }
  
  //The value at arr[i + 1] will be greater than the value of arr[pivot]
  swap(arr, i + 1, pivot);

  //You return i + 1, as the values to the left of it are less than arr[i+1], and values to the right are greater than arr[i + 1]
  // As such, when the recursive quicksorts are called, the new sub arrays will not include this the previously used pivot value
  return i + 1;
}


const swap = (arr, firstIndex, secondIndex) => {
  let temp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = temp;
}

quickSort(arr, 0, arr.length - 1);


