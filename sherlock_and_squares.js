function squares(a, b) {
  let start = Math.ceil(Math.sqrt(a))
  let end = Math.floor(Math.sqrt(b))
  return end - start + 1
  //   var count = 0
  //   for (let i = a; i <= b; i++) {
  //     if (Math.sqrt(i) % 1 == 0) count++
  //   }
  //   return count
}
console.log(squares(25, 49))
