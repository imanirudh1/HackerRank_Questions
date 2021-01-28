function alternatingCharacters(s) {
  var count = 0
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] == s[i]) {
      count++
    }
  }
  return count
}
const s = 'AABAAB'
console.log(alternatingCharacters(s))
