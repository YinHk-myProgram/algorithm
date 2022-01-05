/*
      Using Stack:

      - Store the nodes(values and address) in the stack until all the values are entered.
      - Once all entries are done, Update the Head pointer to the last location(i.e the last value).
      - Start popping the nodes(value and address) and store them in the same order until the stack is empty.
      - Update the next pointer of last Node in the stack by NULL.
      
 */


static void reverseLL() {
	
	// Create a stack "s"
	// of Node type
	Stack<Node> s = new Stack<>();
	Node temp = head;
	while (temp.next != null) {
		// Push all the nodes
		// in to stack
		s.add(temp);
		temp = temp.next;
	}
	head = temp;
  
	while (!s.isEmpty()) {
		
		// Store the top value of
		// stack in list
		temp.next = s.peek();
	
		// Pop the value from stack
		s.pop();
	
		// update the next pointer in the
		// in the list
		temp = temp.next;
	}
	temp.next = null;
}

static void insert_back( int value) {

	// we have used insertion at back method
	// to enter values in the list.(eg:
	// head.1.2.3.4.Null)
	Node temp = new Node();
	temp.data = value;
	temp.next = null;
	
	// If *head equals to null
	if (head == null){
	    head = temp;
	    return;
	}
	else {
	  Node last_node = head;
	  while (last_node.next != null){
		  last_node = last_node.next;
	  }
	  last_node.next = temp;
	  return;
	}  
}

