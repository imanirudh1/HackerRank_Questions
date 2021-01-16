function birthdayCakeCandel(arr) {
  var tallest = 0
  var max = 0
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      max = arr[i]
      count = 1
    } else if (arr[i] === max) {
      count++
    }
  }
  return count
}
const candles = [4, 4, 1, 3]
console.log(birthdayCakeCandel(candles))
