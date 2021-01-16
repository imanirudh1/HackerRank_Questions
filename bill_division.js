function billDivision(bill, item, charged) {
  var total = 0
  for (let i = 0; i < bill.length; i++) {
    if (i === item) {
      continue
    }
    total += bill[i]
    console.log(total)
  }
  var splittedMoney = total / 2
  console.log(splittedMoney)
  if (splittedMoney === charged) {
    console.log('Bon Appetit')
  } else {
    console.log(charged - splittedMoney)
  }
}

const charged = 12
const bill = [3, 10, 2, 9]
billDivision(bill, 1, charged)
