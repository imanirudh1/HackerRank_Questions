function countingValleys(steps, path) {
  var valley = 0
  var level = 0
  for (let i of path) {
    if (i === 'U') {
      level++
    } else {
      level--
    }
    if (i === 'U' && level === 0) {
      valley++
    }
  }
  return valley
}

const path = 'DDUUDDUDUUUD'
console.log(countingValleys(12, path))
