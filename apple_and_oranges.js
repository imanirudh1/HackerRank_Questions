function countApplesAndOranges(s, t, a, b, apples, oranges) {
  var countA = 0
  var countO = 0
  apples.forEach((ele) => {
    let pos = a + ele
    if (pos >= s && pos <= t) {
      countA++
    }
  })
  oranges.forEach((ele) => {
    let pos = b + ele
    if (pos >= s && pos <= t) {
      countO++
    }
  })
  console.log(countA)
  console.log(countO)
}

const apple = [-2, 2, 1]
const oranges = [5, -6]
countApplesAndOranges(7, 11, 5, 15, apple, oranges)
