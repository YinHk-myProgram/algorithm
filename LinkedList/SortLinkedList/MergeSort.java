
node sortedMerge(node a, node b) {
		node result = null;
	
		// Base cases
		if (a == null)
			return b;
		if (b == null)
			return a;

		// Pick either a or b, and recur
		if (a.val < b.val)
		{
			result = a;
			result.next = sortedMerge(a.next, b);
		}
		else
		{
			result = b;
			result.next = sortedMerge(a, b.next);
		}
	
		return result;
	}

	node mergeSort(node h) {
		// Base case : if head is null
		if (h == null || h.next == null)
		{
			return h;
		}

		// get the middle of the list
		node middle = getMiddle(h);
		node nextofmiddle = middle.next;

		// set the next of middle node to null
		middle.next = null;

		// Apply mergeSort on left list
		node left = mergeSort(h);

		// Apply mergeSort on right list
		node right = mergeSort(nextofmiddle);

		// Merge the left and right lists
		node sortedlist = sortedMerge(left, right);
	
		return sortedlist;
	}

	// Utility function to get the middle of the linked list
	public static node getMiddle(node head) {
		if (head == null)
			return head;

		node slow = head, fast = head;

		while (fast.next != null && fast.next.next != null)
		{
			slow = slow.next;
			fast = fast.next.next;
		}
	
		return slow;
	}

