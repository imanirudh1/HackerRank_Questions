function staircase(n) {
  for (let i = 0; i < n; i++) {
    var str = ''
    for (let j = 0; j < n; j++) {
      if (j >= n - i - 1) {
        str += '#'
      } else {
        str += ' '
      }
    }
    console.log(str)
  }
}
staircase(6)
