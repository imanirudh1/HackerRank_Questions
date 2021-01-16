function diagonalDifference(arr) {
  var leftSum = 0
  var rightSum = 0
  for (let i = 0; i < arr.length; i++) {
    leftSum += arr[i][i]
  }
  for (let j = arr.length - 1; j >= 0; j--) {
    rightSum += arr[arr.length - 1 - j][j]
    console.log(rightSum)
  }
  var sum = leftSum - rightSum
  return sum > 0 ? sum : sum * -1
}

const arr = [
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]
console.log(diagonalDifference(arr))
