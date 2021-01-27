function repeatedString(s, n) {
  if (s === 'a') return n
  var len = s.length
  return countStr(s) * Math.floor(n / len) + countStr(s.slice(0, n % len))
}
function countStr(s) {
  var count = 0
  for (let i of s) {
    if (i == 'a') {
      count++
    }
  }
  return count
}
const s = 'abcac'
const n = 10
console.log(repeatedString(s, n))
