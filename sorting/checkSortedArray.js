// checking the given array is sorted or not in JS
const isSorted = arr => arr.every((v,i,a) => !i || a[i-1] <= v);

