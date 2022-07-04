// remove duplicate elements in the array
const array = [1,2,2,3,3,3,5] 
const uniq = [...new Set(array)]     // [ 1, 2, 3, 5 ]


//or 
const uniqueArray = array.filter( (item, index) => array.indexOf(item) == index )

