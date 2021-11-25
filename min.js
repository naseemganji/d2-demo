const min = function (numbers) {
  var minValue = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < minValue) {
      minValue = numbers[i];
    }
  }
  return minValue;
};
let val1 = [1260, 490, 599, 1400, 820];
let val2 = [-4, -1, 3, 0, 1, 4, -2];
let val3 = [232];
let val4 = [45, 10, -20, 0, 3, -20];

console.log(min(val1));
console.log(min(val2));
console.log(min(val3));
console.log(min(val4));
