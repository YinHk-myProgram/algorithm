/*
    1) Divide the list in two parts - first node and 
      rest of the linked list.
    2) Call reverse for the rest of the linked list.
    3) Link rest to first.
    4) Fix head pointer
    
 */

static Node head; // head of list
     
    static class Node {
        int data;
        Node next;
        Node(int d)
        {
            data = d;
            next = null;
        }
    }
  
static Node reverse(Node head) {
  
        if (head == null || head.next == null)
            return head;
 
        /* reverse the rest list and put
        the first element at the end */
        Node rest = reverse(head.next);
        head.next.next = head;
 
        /* tricky step -- see the diagram */
        head.next = null;
 
        /* fix the head pointer */
        return rest;
}

