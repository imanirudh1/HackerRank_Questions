function nonDivisibleSubset(k, s) {
  var remainder = Array(k).fill(0)
  for (let i of s) {
    remainder[i % k] += 1
  }
  var max = Math.min(remainder[0], 1)
  if (k % 2 == 0) {
    max += Math.min(remainder[Math.floor(k / 2)], 1)
  }
  for (let i = 1; i < Math.floor(k / 2) + 1; i++) {
    if (i != k - i) {
      max += Math.max(remainder[i], remainder[k - i])
    }
  }
  return max
}
const arr = [1, 7, 2, 4]
console.log(nonDivisibleSubset(3, arr))
