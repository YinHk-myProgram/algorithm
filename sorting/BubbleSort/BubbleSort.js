/* 

   - Space complexity: O(1)
   - Best case performance: O(n)
   - Average case performance: O(n*n)
   - Worst case performance: O(n*n)
   - Stable: Yes
 */
 
function sortItems(array) {
	for (let i = 0; i < array.length; i++) {
		for (let j = 0; j < array.length; j++) {
			if (array[j] > array[j + 1]) {
				let temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}
