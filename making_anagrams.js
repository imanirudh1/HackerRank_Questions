function makeAnagram(a, b) {
  var count = 0
  var dict = {}

  for (let i of a) {
    if (dict[i]) {
      dict[i] += 1
    } else {
      dict[i] = 1
    }
  }
  for (let i of b) {
    if (dict[i]) {
      dict[i] -= 1
    } else {
      dict[i] = -1
    }
  }
  for (let i in dict) {
    count += Math.abs(dict[i])
  }
  return count
}
const a = 'cde'
const b = 'dcf'
console.log(makeAnagram(a, b))
