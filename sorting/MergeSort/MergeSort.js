/* 
    Merge Sort is a Divide and Conquer algorithm. It divides input array in two halves, calls itself for the two halves and then merges the two sorted halves. The major portion of the algorithm is given two sorted arrays, and we have to merge them into a single sorted array. The whole process of sorting an array of N integers can be summarized into three steps-

    - Divide the array into two halves.
    - Sort the left half and the right half using the same recurring algorithm.
    - Merge the sorted halves.
   
 */


function mergeSort (arr) {
  if (arr.length < 2) return arr;
  var mid = Math.floor(arr.length /2);
  var subLeft = mergeSort(arr.slice(0,mid));
  var subRight = mergeSort(arr.slice(mid));
  return merge(subLeft, subRight);
}
