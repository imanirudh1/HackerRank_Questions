function kangaroo(x1, v1, x2, v2) {
  if (v1 > v2) {
    if ((x1 - x2) % (v2 - v1) === 0) {
      return 'YES'
    }
  }
  return 'NO'
}
console.log(kangaroo(0, 2, 5, 3))
