function extraLongFactorials(n) {
  //   var val = 1
  //   for (i = 1; i <= n; i++) {
  //     val = val * i
  //   }
  //   return BigInt(val)
  var bigInt = BigInt(n)
  var factorial = 1n

  for (let i = 0n; i < bigInt; i++) {
    factorial *= bigInt - i
  }
  return factorial.toString()
}
const n = 25
console.log(extraLongFactorials(n))

// Java Solution

// public class Example
// {
//     // Returns Factorial of N
//     static BigInteger factorial(int N)
//     {
//         // Initialize result
//         BigInteger f = new BigInteger("1"); // Or BigInteger.ONE

//         // Multiply f with 2, 3, ...N
//         for (int i = 2; i <= N; i++)
//             f = f.multiply(BigInteger.valueOf(i));

//         return f;
//     }

//     // Driver method
//     public static void main(String args[]) throws Exception
//     {
//         int N = 20;
//         System.out.println(factorial(N));
//     }
// }
