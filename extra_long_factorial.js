function extraLongFactorials(n) {
  //   var val = 1
  //   for (i = 1; i <= n; i++) {
  //     val = val * i
  //   }
  //   return BigInt(val)
  var bigInt = BigInt(n)
  var factorial = 1n

  for (let i = 0n; i < bigInt; i++) {
    factorial *= bigInt - i
  }
  return factorial.toString()
}
const n = 25
console.log(extraLongFactorials(n))
