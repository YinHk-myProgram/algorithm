// This class contains various usefule methods for manipulating arrays

//using the Arrays class in the java util package
import java.util.*;

int[] arr = new int[n];  //n elements 

/* Methods */

//Returns a fixed-size list backed by the specified array.
List list = Arrays.aslist(arr);

//Searches the specified value by using the binary search algorithm
int value1 = Arrays.binarySearch(arr, key);    //key: the searching value in the array 
int value2 = Arrays.binarySearch(arr, fromInde, toIndex, key);    


