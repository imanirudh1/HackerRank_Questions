function min_max_sum(arr) {
  arr.sort((a, b) => a - b)
  var sum = arr.reduce((acc, cur) => acc + cur, 0)
  var min = sum - arr[arr.length - 1]
  var max = sum - arr[0]
  console.log(`${min} ${max}`)
}

const arr = [1, 2, 3, 4, 5]
min_max_sum(arr)
