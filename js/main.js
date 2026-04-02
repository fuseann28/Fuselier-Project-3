// JS scripts placed here

document.querySelector('.bow').addEventListener('click', function() {
    this.classList.toggle('rotate')
    });

document.querySelector('.lamp-string').addEventListener('click', () => {
  document.querySelector('.lamp').classList.toggle('on');
});

let alarmStarted = false;

window.addEventListener("click", () => {
    console.log('started');
  if (alarmStarted) return;   // prevents multiple timers
  alarmStarted = true;

  setTimeout(() => {
    const alarm = document.getElementById("alarmsound");
    const clock = document.querySelector(".clock");

    alarm.play();
    clock.classList.add("ringing");
  }, 3000); // 10 seconds
});


