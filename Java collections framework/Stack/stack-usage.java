java.util.Stack<E>

/* Java stack
 * The Stack class represents a last-in-first-out (LIFO) stack of objects. 
 * It extends class Vector with five operations that allow a vector to be treated as a stack.
 * When a stack is first created, it contains no items.
 */

import java.util.*;

/* Constructors */
Stack s = new Stack();  //creat stack with empty items

/* Methods */

//check emoty
s.empty();

//get the top object in the stack, and then return that object
s.peek();   

//delete object at the top in the stack, and return that object
s.pop();

//push object at the top in the stack, and return that object
s.push(obj);

//Return the position of the object in the stack, the position of the top is 1
s.search(obj);

