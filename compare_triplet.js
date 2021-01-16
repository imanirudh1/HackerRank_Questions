function compareTriplets(a, b) {
  const score = [0, 0]
  for (let i = 0; i < a.length; i++) {
    if (a[i] > b[i]) {
      score[0] += 1
    } else if (a[i] === b[i]) {
      continue
    } else {
      score[1] += 1
    }
  }
  return score
}
const alex = [17, 28, 30]
const bob = [99, 16, 8]
console.log(compareTriplets(alex, bob))
