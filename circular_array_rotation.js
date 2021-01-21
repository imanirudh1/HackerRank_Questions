function circularArrayRotation(a, k, queries) {
  if (k > a.length) {
    k = k % a.length
  }
  k = a.length - k
  var arr = [...a.slice(k), ...a.slice(0, k)]
  for (let i = 0; i < queries.length; i++) {
    queries[i] = arr[queries[i]]
  }
  return queries
}

const arr = [3, 4, 5]
const rotation = 2
const quries = [1, 2]
console.log(circularArrayRotation(arr, rotation, quries))

// Java Solution
// static int[] circularArrayRotation(int[] a, int k, int[] queries) {

//     int arr[] = new int[a.length];

//     for(int i=0 ; i<a.length ; i++)
//         arr[(i+k)%a.length] = a[i];

//     for(int i=0 ; i<queries.length ; i++)
//         queries[i] = arr[queries[i]];

//     return queries;

// }
