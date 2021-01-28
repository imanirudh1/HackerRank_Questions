function minimumSwaps(arr) {
  var swaps = 0
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] != i + 1) {
      let ele = arr[i] - 1
      let temp = arr[i]
      arr[i] = arr[ele]
      arr[ele] = temp
      swaps++
    }
    return swaps
  }

  //   var swaps = 0
  //   var len = arr.length
  //   for (let i = 0; i < len - 1; i++) {
  //     if (arr[i] == i + 1) {
  //       continue
  //     }
  //     let min = i
  //     for (let j = i + 1; j < len; j++) {
  //       if (arr[min] > arr[j]) {
  //         min = j
  //       }
  //     }
  //     if (min != i) {
  //       let temp = arr[min]
  //       arr[min] = arr[i]
  //       arr[i] = temp
  //       swaps++
  //     }
  //   }
  //   return swaps
}

const arr = [4, 3, 1, 2]
console.log(minimumSwaps(arr))
