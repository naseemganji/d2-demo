const sum = function(arr) {
let result = 0
console.log(arr)
for (let i = 0; i <arr.length; i++) {
  result = result+Number(arr[i])
}
return result;
}
const arr = process.argv.slice(2);
const result = sum(arr);
console.log(`total is === ${result}`)


