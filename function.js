function login()    {
    username = document.getElementById("username") . value;
    password = document.getElementById("password") . value;
    if ((username == "admin") && (password == "password"))  {
        document.cookie = "login=true; path=/";
        window.location = "/";
    }
}


function logout()   {
    document.cookie = "login=false";
    window.location.reload();
}

  const audio = document.getElementById("audio");
  const playBtn = document.getElementById("playBtn");
  const progress = document.getElementById("progress");
  const progressFilled = document.getElementById("progressFilled");
  const time = document.getElementById("time");
  const playerBox = document.getElementById("playerBox");

  playBtn.addEventListener("click", () => {
    if (audio.paused) {
      audio.play();
      playBtn.textContent = "⏸";
      playerBox.style.animation = "pulse 1.4s infinite"; // glowing when playing
    } else {
      audio.pause();
      playBtn.textContent = "💀";
      playerBox.style.animation = "flicker 4s infinite steps(25)";
    }
  });

  audio.addEventListener("timeupdate", () => {
    const percent = (audio.currentTime / audio.duration) * 100;
    progressFilled.style.width = percent + "%";

    const mins = Math.floor(audio.currentTime / 60);
    const secs = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
    time.textContent = `${mins}:${secs}`;
  });

  progress.addEventListener("click", (e) => {
    const width = progress.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  });
   progress.addEventListener("click", e => {
    const width = progress.clientWidth;
    const clickX = e.offsetX;
    audio.currentTime = (clickX / width) * audio.duration;
  });

  // Volume control
  volumeSlider.addEventListener("input", () => {
    audio.volume = volumeSlider.value;
  });