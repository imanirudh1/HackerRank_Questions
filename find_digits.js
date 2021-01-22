function findDigits(n) {
  var count = 0
  var digits = n
    .toString()
    .split('')
    .map((el) => parseInt(el))
  for (let i = 0; i < digits.length; i++) {
    if (n % digits[i] == 0) count++
  }
  return count
}

const n = 1012
console.log(findDigits(n))
