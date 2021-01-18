function formingMagicSquare(s) {
  let lowest = Number.MAX_SAFE_INTEGER
  const theMagic = [
    [
      [8, 1, 6],
      [3, 5, 7],
      [4, 9, 2],
    ],
    [
      [6, 1, 8],
      [7, 5, 3],
      [2, 9, 4],
    ],
    [
      [4, 9, 2],
      [3, 5, 7],
      [8, 1, 6],
    ],
    [
      [2, 9, 4],
      [7, 5, 3],
      [6, 1, 8],
    ],
    [
      [8, 3, 4],
      [1, 5, 9],
      [6, 7, 2],
    ],
    [
      [4, 3, 8],
      [9, 5, 1],
      [2, 7, 6],
    ],
    [
      [6, 7, 2],
      [1, 5, 9],
      [8, 3, 4],
    ],
    [
      [2, 7, 6],
      [9, 5, 1],
      [4, 3, 8],
    ],
  ]
  for (let k = 0; k < theMagic.length; k++) {
    let totalDiff = 0
    for (let i = 0; i < s.length; i++) {
      for (let j = 0; j < s.length; j++) {
        totalDiff += Math.abs(s[i][j] - theMagic[k][i][j])
      }
    }
    if (totalDiff < lowest) {
      lowest = totalDiff
    }
  }
  return lowest
}

const s = [
  [5, 3, 4],
  [1, 5, 8],
  [6, 4, 2],
]

console.log(formingMagicSquare(s))
