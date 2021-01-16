function plusMinus(arr) {
  var pos = 0
  var neg = 0
  var zero = 0
  var n = arr.length
  for (let i = 0; i < n; i++) {
    if (arr[i] < 0) {
      neg += 1
    } else if (arr[i] === 0) {
      zero += 1
    } else {
      pos += 1
    }
  }
  console.log(parseFloat(pos / n).toFixed(6))
  console.log(parseFloat(neg / n).toFixed(6))
  console.log(parseFloat(zero / n).toFixed(6))
}
const arr = [-4, 3, -9, 0, 4, 1]
plusMinus(arr)
