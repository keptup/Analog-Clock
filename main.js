const clockContainer = document.querySelector(".clock-container");

const clock = () => {
  const date = new Date();
  let hours = String(date.getHours());
  hours = hours.length < 2 ? `0${hours}` : hours;
  let minutes = String(date.getMinutes());
  minutes = minutes.length < 2 ? `0${minutes}` : minutes;
  let seconds = String(date.getSeconds());

  if (seconds.length < 2) {
    seconds = "0" + seconds;
  }

  clockContainer.textContent = `${hours}:${minutes}:${seconds}`;
};

setInterval(clock, 500);
