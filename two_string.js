function twoStrings(s1, s2) {
  var dict = {}
  for (let i of s1) {
    if (dict[i]) {
      dict[i] += 1
    } else {
      dict[i] = 1
    }
  }
  for (let i of s2) {
    if (dict[i]) {
      return 'Yes'
    }
  }
  return 'No'
}
const s1 = 'hello'
const s2 = 'adf'
console.log(twoStrings(s1, s2))
