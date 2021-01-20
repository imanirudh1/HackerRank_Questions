function saveThePrisoner(n, m, s) {
  //   var chair = s
  //   for (let i = 1; i < m; i++) {
  //     chair++
  //     if (chair > n) {
  //       chair = 1
  //     }
  //   }
  //   return chair
  return (m - 1 + s) % n || n
}
const numOfPrisoners = 7
const sweets = 19
const startingPos = 2
console.log(saveThePrisoner(numOfPrisoners, sweets, startingPos))
