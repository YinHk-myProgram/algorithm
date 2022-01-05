/*
   1. Create a linked list.
   2. Then, make a count(head) function to count the number of nodes.
   3. Initialize an array with the size of the count.
   4. and start a while(p->next!=NULL) loop and store all the node’s data into the array.
   5. and then print the array from the last index to the first.
 */


//count the no. of nodes
public int count(node head) {
  
        node p = head;
        int k = 1;
        while (p != null) {
            p = p.next;
            k++;
        }
        return k;
 }

//to reverse the linked list
public node reverse(node head) {
		node p = head;
		int i = count(head), j = 1;
		int[] arr = new int[i];

		while (i != 0 && p != null) {
			arr[j++] = p.val;
			p = p.next;
			i--;
		}
		j--;
		while (j != 0) // loop will break as soon as j=0
		{
			System.out.print(arr[j--] + " ");
		}

		return head;
}
	

