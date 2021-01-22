function permutationEquation(p) {
  var res = []
  for (let i = 1; i <= p.length; i++) {
    res.push(p.indexOf(p.indexOf(i) + 1) + 1)
  }
  return res
}
const p = [5, 2, 1, 3, 4]
console.log(permutationEquation(p))
