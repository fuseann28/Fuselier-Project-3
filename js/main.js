
// Bow
document.querySelector('.bow').addEventListener('click', function() {
    this.classList.toggle('rotate')
    });

// Lamp
document.querySelector('.lamp-string').addEventListener('click', () => {
  document.querySelector('.lamp').classList.toggle('on');
});

// Clock (it was so hard and i was fighting with the robot the whole time)
let alarmStarted = false;

function startAlarm() {
  const alarm = document.getElementById("alarmsound");
  const clock = document.querySelector(".clock");

  alarm.currentTime = 0; 
  alarm.play();

  clock.classList.add("ringing");


  setTimeout(() => {
    clock.classList.remove("ringing");
  }, 9000);
}

window.addEventListener("click", () => {
  if (alarmStarted) return;
  alarmStarted = true;


  setTimeout(() => {
    startAlarm();


    setInterval(startAlarm, 60000);

  }, 5000);
});


