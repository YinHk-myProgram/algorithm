//Time complexity: O(n ^ 2)
//Space complexity: O(1)

//Bubble sort nodes of the list in ascending order
	public void sortList() {

		// Node current will point to head
		Node current = head, index = null;

		int temp;

		if (head == null) {
			return;
		}
		else {
			while (current != null) {
				// Node index will point to node next to current
				index = current.next;

				while (index != null) {
					//If current node's data is greater than index's node data, swap the data between them
					if (current.data > index.data) {
						temp = current.data;
						current.data = index.data;
						index.data = temp;
					}

					index = index.next;
				}
				current = current.next;
			}
		}
		
	}

