let dice = process.argv.slice(2);
const throwDice = function (dice) {
  let total = [];
  for (let i = 1; i <= dice; i++) {
    let randomNum = ` ${Math.floor(Math.random() * 6)}`;
    total.push(randomNum);
  }
  return total.join(`,`);
};
console.log(`Rolled ${dice} dice" ${throwDice(dice)}`);
