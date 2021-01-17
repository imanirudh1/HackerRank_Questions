function catAndMouse(x, y, z) {
  var catA = Math.abs(x - z)
  var catB = Math.abs(y - z)
  if (catA === catB) {
    console.log('Mouse C')
  } else if (catA > catB) {
    console.log('Cat B')
  } else {
    console.log('Cat A')
  }
}
catAndMouse(2, 5, 4)
