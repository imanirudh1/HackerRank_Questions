function pickingNumbers(a) {
  const frequency = Array(101).fill(0)
  for (let i = 0; i < a.length; i++) {
    if (!frequency[a[i]]) {
      frequency[a[i]] = 1
    } else {
      frequency[a[i]]++
    }
  }
  console.log(frequency)
  var max = Number.MIN_SAFE_INTEGER
  for (let i = 1; i <= 100; i++) {
    max = Math.max(max, frequency[i] + frequency[i - 1])
  }
  return max
}

const arr = [4, 6, 5, 3, 3, 1]
console.log(pickingNumbers(arr))
