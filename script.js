let unixTarget = 1789064610
window.addEventListener('load', function() {
  setInterval(function() {
    let unixNow = Math.floor(Date.now()/1000)
    let counter = document.getElementById("counter")
    let secs = (unixTarget - unixNow)
    let days = secs % 86400
    secs -= days*86400
    let hours = secs % 3600
    secs -= days*3600
    let mins = secs % 60
    secs -= days*60
    counter.innerHTML = (days+" days, "+hours+" hours, "+mins+" minutes and "+secs+" seconds left.")
  }, 1000)
});
  



