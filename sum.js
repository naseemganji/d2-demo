const sum = function(arr) {
let result = 0

for (let element of arr){
  result += Number(element);
}
return result;
}
const arr = process.argv.slice(2);
const result = sum(arr);
console.log(`total is === ${result}`)