function matrix_sum(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr[0].length; j++) {
      if (i === 0 && j === 0) {
        continue
      } else if (i === 0 && j > 0) {
        arr[i][j] += arr[i][j - 1]
      } else if (i > 0 && j == 0) {
        arr[i][j] += arr[i - 1][j]
      } else {
        arr[i][j] += arr[i - 1][j] + arr[i][j - 1]
      }
    }
  }
  return arr
}
const arr = [
  [1, 2, 3],
  [4, 5, 6],
]
console.log(matrix_sum(arr))
