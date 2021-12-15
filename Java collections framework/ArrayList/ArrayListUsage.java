/* 
 * Why ArrayList is better than Array?
 * Because The limitation with array is that it has a fixed length so if it is full you cannot add any more elements to it,
 * ArrayList is similar to array. 
 * But ArrayList can dynamically grow and shrink after addition and removal of elements, also we can use predefined methods of it which makes our task easy.
 */

//Using util package
import java.util.*;

//Declare an ArrayList and define your data type for the element inside the array
ArrayList<T> list = new ArrayList<T>();      //default capacity is 10
ArrayList<T> list2 = new ArrayList<T>(n);    //define capacity n   
ArrayList<T> list3 = new ArrayList<T>(c);    //specific collection object

/*  Initialization */
ArrayList<T> arrlist = new ArrayList<T>( Arrays.asList( obj1, obj2, obj3,....) );     //using Arrays.asList
ArrayList<T> arrlist2 = new ArrayList<T>() {{
                        add(obj1);
		                  add(obj2);
		                  add(obj3);
                        ... }};                                                       //using anonymous inner class
ArrayList<T> arrlist3 = new ArrayList<T>();                                           //use the add method in ArrayList
arrlist3.add(obj1);
arrlist3.add(obj2);
arrlist3.add(obj3);
....
	
ArrayList<T> arrlist4 = new ArrayList<T>(Collections.nCopies(count, obj));	      //using collections.ncopies method, with same element in the array list
 

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

//return how many elements in the array list
list.size();

//Increases the capacity of the list, default capacity is 10 
list.ensureCapacity(minCapacity); 

/* remove elements */

//Removes the element at the specified index in this list.
list.remove(index);   //return the element that was removed from the list

//Removes the first occurrence of the specified element e from this list
list.remove(e);   //return true

/* Removes from this list all of the elements whose index is between
 * fromIndex, inclusive, and toIndex, exclusive.
 */
list.removeRange(fromIndex, toIndex);

//removing all the elements of the array list
list.clear();

/* Change an element */

//Replaces the element e at the specified position in this list with the specified element.
list.set(index, e);

/* Other methods */

//get element from the list 
list.get(index);
   
//Clone ArrayList, returns a shallow copy of ArrayList
ArrayList copyList = (ArrayList) list.clone();   //list2 equals to list

//Returns the index of the first occurrence of the specified element e
list.indexOf(e);     //if not found, return -1

//Checks whether the given specified element e is present in the array list.
list.contains(e);    //return a boolean

//Trims the capacity of this ArrayList instance to be the array list's current size.
list.trimToSize();

/* Looping */

for (T t:list){
   System.out.println(t); 
}

for (int i=0;i<list.size();i++){
   System.out.println(list.get(i));
}

int count = 0;
while(condition) {
   System.out.println(list.get(count));
   count++;
}

//using Enumeration interface to loop
Enumeration<T> e = Collections.enumeration(list);	//pass the ArrayList as parameter
while(e.hasMoreElements()) {
   System.out.println(e.nextElement());
}


      









