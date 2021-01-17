function getMoneySpent(keyboards, drives, b) {
  var max = -1
  for (let i = 0; i < keyboards.length; i++) {
    for (let j = 0; j < drives.length; j++) {
      var item = keyboards[i] + drives[j]
      if (max < item && item <= b) {
        max = item
      }
    }
  }
  return max
}
const budget = 5
const keyboard = [4]
const drive = [5]
console.log(getMoneySpent(keyboard, drive, budget))
