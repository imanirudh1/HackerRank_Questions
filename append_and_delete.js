function appendAndDelete(s, t, k) {
  var n1 = s.length
  var n2 = t.length
  var i
  for (i = 0; i < n2; i++) {
    if (s[i] != t[i]) break
  }
  var count = n1 - i + n2 - i
  if (k === count || k >= n1 + n2) {
    return 'Yes'
  } else if (count % 2 == k % 2 && count <= k) {
    return 'Yes'
  } else {
    return 'No'
  }
}
const initial = 'hackerhappy'
const desired = 'hackerrank'
const numOfOperation = 9
console.log(appendAndDelete(initial, desired, numOfOperation))
