function hurdleRace(k, height) {
  var max = Number.MIN_SAFE_INTEGER
  for (let i of height) {
    if (i > max) {
      max = i
    }
  }
  if (k > max) {
    return 0
  } else {
    return max - k
  }
}
const height = [1, 6, 3, 5, 2]
const k = 4
console.log(hurdleRace(k, height))
