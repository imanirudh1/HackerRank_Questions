function cutTheSticks(arr) {
  var len = arr.length
  var newArr = []
  while (len) {
    newArr.push(len)
    console.log(len)
    var min = Math.min(...arr)
    arr = arr.map((el) => el - min).filter((el) => el)
    len = arr.length
  }
  return newArr
}
const arr = [5, 4, 4, 2, 2, 8]
console.log(cutTheSticks(arr))
