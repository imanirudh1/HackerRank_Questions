function pageCount(n, p) {
  var totalPageTurnFromFront = Math.floor(n / 2)
  var targetPageTurnFromFront = Math.floor(p / 2)
  var targetPageTurnFromBack = totalPageTurnFromFront - targetPageTurnFromFront
  return Math.min(targetPageTurnFromBack, targetPageTurnFromFront)
}

const numOfPages = 8
const pageNo = 5
console.log(pageCount(numOfPages, pageNo))
