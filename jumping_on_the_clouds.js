function jumpingOnClouds(c, k) {
  var energy = 100
  var n = c.length
  var i = k % n
  energy -= c[i] * 2 + 1
  while (i != 0) {
    i = (i + k) % n
    energy -= c[i] * 2 + 1
  }
  return energy
}
const jump = 2
const clouds = [0, 0, 1, 0, 0, 1, 1, 0]
console.log(jumpingOnClouds(clouds, jump))
