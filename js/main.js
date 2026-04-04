// JS scripts placed here

document.querySelector('.bow').addEventListener('click', function() {
    this.classList.toggle('rotate')
    });

document.querySelector('.lamp-string').addEventListener('click', () => {
  document.querySelector('.lamp').classList.toggle('on');
});

let alarmStarted = false;

function startAlarm() {
  const alarm = document.getElementById("alarmsound");
  const clock = document.querySelector(".clock");

  alarm.currentTime = 0;   // restart audio
  alarm.play();

  clock.classList.add("ringing");

  // remove the animation class after 9 seconds
  setTimeout(() => {
    clock.classList.remove("ringing");
  }, 9000);
}

window.addEventListener("click", () => {
  if (alarmStarted) return;
  alarmStarted = true;

  // first alarm after 5 seconds
  setTimeout(() => {
    startAlarm();

    // repeat every 60 seconds
    setInterval(startAlarm, 60000);

  }, 5000);
});


