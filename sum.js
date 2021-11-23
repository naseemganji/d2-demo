//create a program that takes
//any number of commnad line arguments
// that will be numbers and adds them together
// in  and returns a sum of all numbers

//how do I add numbers
console.log(1+2)
// do I store multiple numbers
const arr = process.argv.slice(2);
console.log("------------")
console.log(arr)
//how do I add these numbers in accrray
let sum = 0
for (let i = 0; i <arr.length; i++) {
  console.log("i is === ", i ," and arr[i] is === ", arr[i]);
  sum = sum+arr[i]
  console.log("total is ===", sum)
    //console.log(i++)
}
console.log("--------");

