function stepPerms(n) {
  var dp = Array(Math.max(n + 1, 4)).fill(0)
  dp[1] = 1
  dp[2] = 2
  dp[3] = 4
  for (let i = 4; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3]
  }
  return dp[n]
}
console.log(stepPerms(7))
