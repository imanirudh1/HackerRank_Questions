function libraryFine(d1, m1, y1, d2, m2, y2) {
  if (y1 > y2) {
    return 10000
  } else if (y2 == y1 && m1 > m2) {
    return 500 * (m1 - m2)
  } else if (y2 == y1 && m2 == m1 && d1 > d2) {
    return 15 * (d1 - d2)
  } else {
    return 0
  }
}
//arguments d1,m1,y1,d2,m2,y2

console.log(libraryFine(2, 6, 2014, 5, 7, 2014))
