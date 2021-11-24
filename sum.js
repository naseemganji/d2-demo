//create a program that takes
//any number of commnad line arguments
// that will be numbers and adds them together
// in  and returns a sum of all numbers

//how do I add numbers//
//console.log(1+2)
// do I store multiple numbers
//console.log("------------")

const sum = function(arr) {
//how do I add these numbers in accrray
let result = 0
console.log(arr)
for (let i = 0; i <arr.length; i++) {
  //console.log("i is === ", i ," and arr[i] is === ", arr[i]);
  result = result+Number(arr[i])
    //console.log(i++)
}
return result;
}
const arr = process.argv.slice(2);
const result = sum(arr);

//console.log("--------");
console.log(`total is === ${result}`)


