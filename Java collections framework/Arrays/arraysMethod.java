// This class contains various usefule methods for manipulating arrays

//using the Arrays class in the java util package
import java.util.Arrays;

//arr which used bellow represents an array 

/* Methods */

//Returns a fixed-size list backed by the specified array.
List list = Arrays.aslist(arr);

//Searches the specified value by using the binary search algorithm
int value1 = Arrays.binarySearch(arr, key);    //key: the searching value in the array 
int value2 = Arrays.binarySearch(arr, fromInde, toIndex, key);    

//Copy an array and return a new array with the specified length.
Arrays.copyOf(arr, length); 

//Copies the specified range of the specified array into a new  return array.
Arrays.copyOfRange(arr, fromIndex, toIndex);

//Checks two specified arrays are wual or not. Returns a boolean
//Two arrays are equal if they contain the same elements in the same order. Also, two array references are considered equal if both are null.
Arrays.equals(arr1, arr2);

//Checks two specified arrays are deeply equal to one another. Return a boolean
/*
Unlike the equals(Object[],Object[]) method, this method is appropriate for use with nested arrays of arbitrary depth.
Two array references are considered deeply equal if both are null, or if they refer to arrays that contain the same number of elements and all corresponding pairs of elements in the two arrays are deeply equal.
*/
Arrays.deepEquals(arr1,arr2);

//Returns a string representation of the "deep contents" of the specified array.
Arrays.deepToString(arr);

//Assigns the specified value to each element of the specified array.
Arrays.fill(arr, value);

//Assigns the specified value to each element of the specified range of the specified array 
Arrays.fill(arr, fromIndex, toIndex, value);

//sorting array (ascending)
Arrays.sort(arr);
Arrays.sort(arr, fromIndex, toIndex);

//Returns a string representation of the contents of the specified array.
Arrays.toString(arr);

