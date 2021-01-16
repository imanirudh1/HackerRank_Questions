function timeConversion(s) {
  var time = s.slice(0, s.length - 2)
  var hr = s.slice(s.length - 2)
  console.log(time)
  console.log(hr)
  if (hr === 'AM') {
    if (time.slice(0, 2) === '12') {
      return '00' + time.slice(2)
    }
    return time
  } else {
    if (time.slice(0, 2) === '12') {
      return time
    }
    let format = +time.slice(0, 2) + 12
    return format.toString() + time.slice(2)
  }
}
const s = '12:01:00PM'
console.log(timeConversion(s))

//Python solution
// time = input().strip()
// h, m, s = map(int, time[:-2].split(':'))
// p = time[-2:]
// h = h % 12 + (p.upper() == 'PM') * 12
// print(('%02d:%02d:%02d') % (h, m, s))
