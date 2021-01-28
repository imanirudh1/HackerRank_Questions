function minimumBribes(q) {
  var swaps = 0
  var min = q.length

  for (let i = q.length - 1; i >= 0; i--) {
    if (q[i] - i > 3) return 'Too Chaotic'
    if (q[i] > i + 1) {
      swaps += q[i] - (i + 1)
    } else {
      if (min > q[i]) {
        min = q[i]
      } else if (q[i] != min) {
        swaps++
      }
    }
  }
  return swaps
}
const q = [2, 1, 5, 3, 4]
console.log(minimumBribes(q))
