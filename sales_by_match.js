function sockMerchant(n, ar) {
  var pair = {}
  var count = 0
  for (let i = 0; i < n; i++) {
    if (pair[ar[i]]) {
      delete pair[ar[i]]
      count++
    } else {
      pair[ar[i]] = 1
    }
  }
  console.log(pair)

  return count
}

const arr = [10, 20, 20, 10, 10, 30, 50, 10, 20]
const n = arr.length
console.log(sockMerchant(n, arr))
