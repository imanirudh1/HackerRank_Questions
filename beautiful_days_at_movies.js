function beautifulDays(i, j, k) {
  var count = 0
  for (let n = i; n <= j; n++) {
    var reversed = n.toString().split('').reverse().join('')
    var beautifulDay = Math.abs(n - reversed)
    if (beautifulDay % k == 0) {
      count++
    }
  }
  return count
}
const startingDay = 20
const endingDay = 23
const k = 6
console.log(beautifulDays(startingDay, endingDay, k))
