/*
    input: Head of following linked list 
    1->2->3->4->5->NULL 
    Output: Linked list should be changed to, 
    5->4->3->2->1->NULL
 */

// Algorithm for Java reversing the linked list

//Iterative Method 

/*
      1. Initialize three pointers prev as NULL, curr as head and next as NULL.
      2. Iterate through the linked list. In loop, do following. 
         //Before changing next of current, 
         //store next node 
           next = curr->next
         // Now change next of current 
         // This is where actual reversing happens 
           curr->next = prev 
         // Move prev and curr one step forward 
           prev = curr 
           curr = next
 */

/* Function to reverse the linked list */
public Node reverse(Node node){
  
		Node prev = null;
		Node current = node;
		Node next = null;
		while (current != null) {
			next = current.next;
			current.next = prev;
			prev = current;
			current = next;
		}
		node = prev;
		return node;
}

