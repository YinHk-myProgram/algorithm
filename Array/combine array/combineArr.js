const arr1 = ['a', 'b'];
const arr2 = [0, 1, 2];

arr1.push.apply(arr1, arr2);

//or
arr1.push(...arr2);

//or
arr1.concat(arr2);
