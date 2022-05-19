//Reverse an array

/*
   1) Initialize start and end indexes as start = 0, end = n-1 
   2) In a loop, swap arr[start] with arr[end] and change start and end as follows : 
	
	  start = start +1, end = end – 1
 */
public void rvereseArray(int arr[], int start, int end){
     int temp;
     while (start < end) {
            temp = arr[start];
            arr[start] = arr[end];
            arr[end] = temp;
            start++;
            end--;
     }
} 


/*  
    1) Initialize start and end indexes as start = 0, end = n-1 
    2) Swap arr[start] with arr[end] 
    3) Recursively call reverse for rest of the array.
 */
public void rvereseArray(int arr[], int start, int end){
        int temp;
        if (start >= end)
            return;
	
        temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        rvereseArray(arr, start+1, end-1);
}

