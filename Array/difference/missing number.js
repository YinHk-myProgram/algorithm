//Given two arrays of integers, find which elements in the second array are missing from the first array.

function missingNumbers(arr1, arr2) {
    // Write your code here
    arr1.sort((a,b)=>a-b);
    arr2.sort((a,b)=>a-b);
    let set = new Set();
    let missNums = [];
    let j=0;
    for(let i=0; i<arr2.length; i++) {
      if(arr2[i] !== arr1[j]) {
        set.add(arr2[i]);
      }else j++;
    }
    set.forEach(item => {
        missNums.push(item);
    });
    missNums.sort((a, b)=>a-b);
    return missNums;
}


//or 
function findMissing(a,b,n,m){
        // Store all elements of
        // second array in a hash table
        let s = new Set();
        for (let i = 0; i < m; i++)
            s.add(b[i]);
          
        // Print all elements of first array
        // that are not present in hash table
        for (let i = 0; i < n; i++)
            if (!s.has(a[i]))
                document.write(a[i] + " ");
}
