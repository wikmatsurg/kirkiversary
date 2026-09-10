let counter = document.getElementById("counter")
let unixTarget = 1789064610
setInterval(function() {
  let unixNow = Math.floor(Date.now())
  counter.innerHTML = unixTarget - unixNow
}, 1000)

