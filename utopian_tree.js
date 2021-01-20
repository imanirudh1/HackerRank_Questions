function utopianTree(n) {
  var res = 1
  if (n == 0) return res
  for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
      res += 1
    } else {
      res *= 2
    }
  }
  return res
}
const n = [0, 1, 2, 3, 4, 5]
n.forEach((ele) => console.log(utopianTree(ele)))
