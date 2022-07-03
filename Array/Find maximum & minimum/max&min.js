//Find min & max using Math object method
Math.max(...array)
Math.min(...array)


//using built-in reduce() method
const arr = [1,2,33,18,39]
const max = arr.reduce((a, b) => {
    if(a > b) return a;
      else return b;
})

const min = arr.reduce((a, b) => {
    if(a < b) return a;
      else return b;
})


//using loop
let min = arr[0]
for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < min) {
        min = arr[i]
    }
}
return min

let max = arr[0]
for (let i = 1; i < arr.length; ++i) {
    if (arr[i] < max) {
        max = arr[i]
    }
}
return max


