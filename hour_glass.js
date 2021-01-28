function hourglassSum(arr) {
  let max = []
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = 0; j < arr[0].length - 2; j++) {
      let sum =
        arr[i][j] +
        arr[i][j + 1] +
        arr[i][j + 2] +
        arr[i + 1][j + 1] +
        arr[i + 2][j] +
        arr[i + 2][j + 1] +
        arr[i + 2][j + 2]
      max.push(sum)
    }
  }
  return Math.max(...max)
}

const arr = [
  [1, 1, 1, 0, 0, 0],
  [0, 1, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0],
  [0, 0, 2, 4, 4, 0],
  [0, 0, 0, 2, 0, 0],
  [0, 0, 1, 2, 4, 0],
]
console.log(hourglassSum(arr))

//Python Solution
// arr = [[1, 1, 1, 0, 0, 0],
// [0, 1, 0, 0, 0, 0],
// [1, 1, 1 ,0, 0, 0],
// [0 ,0 ,2 ,4, 4, 0],
// [0 ,0 ,0 ,2, 0, 0],
// [0 ,0, 1 ,2, 4, 0]]
// res=[]
// for x in range(0, 4):
//     for y in range(0, 4):
//         s = sum(arr[x][y:y+3]) + arr[x+1][y+1] + sum(arr[x+2][y:y+3])
//         res.append(s)
// print(max(res))
