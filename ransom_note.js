function checkMagazine(magazine, note) {
  var dict = {}
  for (let i of magazine.split(' ')) {
    if (dict[i]) {
      dict[i] += 1
    } else {
      dict[i] = 1
    }
  }
  for (let i of note.split(' ')) {
    if (dict[i]) {
      if (dict[i] == 0) {
        console.log('NO')
        return
      } else {
        dict[i] -= 1
      }
    } else {
      console.log('NO')
      return
    }
  }
  console.log('YES')
  return
}
const magazine = 'ive got a lovely bunch of coconuts'
const note = 'ive got some coconuts'
console.log(checkMagazine(magazine, note))
