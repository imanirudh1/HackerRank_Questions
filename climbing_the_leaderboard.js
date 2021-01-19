function climbingLeaderboard(scores, alice) {
  var res = []
  var unique = [...new Set(scores)]
  var rank = unique.length - 1
  for (let i of alice) {
    while (rank >= 0) {
      if (i >= unique[rank]) {
        rank--
      } else {
        res.push(rank + 2)
        break
      }
    }
    if (rank < 0) res.push(1)
  }
  return res
}
const leaderBoard = [100, 90, 90, 80, 75, 60]
const playerScore = [50, 65, 77, 90, 102]

console.log(climbingLeaderboard(leaderBoard, playerScore))
