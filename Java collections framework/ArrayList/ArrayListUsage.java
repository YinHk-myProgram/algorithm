/* 
 * Why ArrayList is better than Array?
 * Because The limitation with array is that it has a fixed length so if it is full you cannot add any more elements to it,
 * ArrayList is similar to array. 
 * But ArrayList can dynamically grow and shrink after addition and removal of elements, also we can use predefined methods of it which makes our task easy.
 */

//Using util package
import java.util.*;

//Declare an ArrayList and define your data type for the element inside the array
ArrayList<T> list = new ArrayList<T>();

/* Add elements */

//Add the specified element e to the end of this list. 
list.add(e);  //return true

//Add the specified element e to the specific index of this list.
list.add(index, e);

/* Add all of the elements in the specified collection c to the end of
 * this list, in the order that they are returned by the
 * specified collection's Iterator. 
 */
list.addAll(c);   //return true

//Add all of the elements in the specified collection c  to the specific index of this list.
list.addAll(index, c);    //return true

/* ArrayList Size */

//return the length
list.size();

/* remove elements */

//Removes the element at the specified index in this list.
list.remove(index);   //return the element that was removed from the list

//Removes the first occurrence of the specified element from this list
list.remove(e);   //return true




