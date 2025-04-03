let seconds = document.getElementById("seconds");
let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");

let m = document.getElementById("m");
let mm = "AM";
let interval = setInterval(function () {
  let time = new Date();
  hours.textContent = time.getHours();
  minutes.textContent = time.getMinutes();
  seconds.textContent = time.getSeconds();
  let hours_count = time.getHours();
  if (hours_count > 12) {
    mm = "PM";
    m.textContent = mm;
  }
}, 1000);
