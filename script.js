let unixTarget = 1820600610
let playing = 0
window.addEventListener('load', function() {
  let kirk = document.getElementById("kirk")
  setInterval(function() {
    let unixNow = Math.floor(Date.now()/1000)
    let counter = document.getElementById("counter")
    let secs = (unixTarget - unixNow)
    if (secs < 49) {
      if (playing == 0) {
        playing = 1
        kirk.play();
      }
    }
    let days = Math.floor(secs/86400)
    secs -= days*86400
    let hours = Math.floor(secs/3600)
    secs -= hours*3600
    let mins = Math.floor(secs/60)
    secs -= mins*60
    counter.innerHTML = (days+" days, "+hours+" hours, "+mins+" minutes and "+secs+" seconds.")
  }, 1000)
});
  



