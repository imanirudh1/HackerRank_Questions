function angryProfessor(k, a) {
  var count = 0
  for (let i of a) {
    if (i <= 0) {
      count++
    }
  }
  if (count < k) {
    return 'YES'
  } else {
    return 'NO'
  }
}
const arrivalTime = [-1, -3, 4, 2]
const k = 3
console.log(angryProfessor(k, arrivalTime))
