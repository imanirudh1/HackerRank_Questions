function viralAdvertising(n) {
  var shared = Math.floor(5 / 2)
  var cumulative = shared
  var liked = shared
  for (let i = 2; i <= n; i++) {
    shared = liked * 3
    liked = Math.floor(shared / 2)
    cumulative += liked
  }
  return cumulative
}
console.log(viralAdvertising(5))
