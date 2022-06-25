// reverse LinkedList by iterative method

const reverse = function(head) {
    let prev = null;
    while(head) {
        // Store rest of the nodes
        let next = head.next;
        
        // Change next node of the current node so it would link to previous node.
        head.next = prev;
      
        // iteration
        prev = head;
        head = next;
    }
   
    // After iteration, all node reversed, asign node(the head) to prevNode(start)
    head = prev;
}
