function designerPdfViewer(h, word) {
  const letter = genCharArray('a', 'z')
  const obj = {}
  var max = Number.MIN_SAFE_INTEGER
  for (let i = 0; i < h.length; i++) {
    obj[letter[i]] = h[i]
  }
  for (let i of word) {
    if (obj[i] > max) {
      max = obj[i]
    }
  }
  return max * word.length
}
function genCharArray(charA, charZ) {
  var a = []
  var charA = charA.charCodeAt(0)
  var charZ = charZ.charCodeAt(0)
  for (let i = charA; i <= charZ; i++) {
    a.push(String.fromCharCode(i))
  }
  return a
}
const letterHeight = [
  1,
  3,
  1,
  3,
  1,
  4,
  1,
  3,
  2,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  5,
  7,
]
const word = 'abc'
console.log(designerPdfViewer(letterHeight, word))

// Another way to solve
// function designerPdfViewer(h, word) {
//     let maxHeight = 0;

//     for (let c of word.toUpperCase()) {
//         let charHeight = h[c.charCodeAt(0) - 65];
//         if (charHeight > maxHeight)
//             maxHeight = charHeight;
//     }

//     return word.length * maxHeight;
// }
