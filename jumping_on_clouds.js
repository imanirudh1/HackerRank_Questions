function jumpingOnClouds(c) {
  var jump = 0
  let i = 0
  let len = c.length

  while (i < len - 1) {
    if (c[i + 2] != 1) {
      jump++
      i += 2
    } else {
      jump++
      i += 1
    }
  }
  return jump
}
const clouds = [0, 0, 0, 0, 1, 0]
console.log(jumpingOnClouds(clouds))
