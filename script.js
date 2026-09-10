let unixTarget = 1789064610
window.onload(function() {
  setInterval(function() {
    let unixNow = Math.floor(Date.now())
    let counter = document.getElementById("counter")
    counter.innerHTML = (unixTarget - unixNow)
  }, 1000)
})


