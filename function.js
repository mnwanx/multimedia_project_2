function login()    {
    username = document.getElementById("username") . value;
    password = document.getElementById("password") . value;
    if ((username == "abc") && (password == "123"))  {
        localStorage.setItem("multimedia_login", "true");
        window.location = "./index.html";
    }
}


function logout()   {
    localStorage.removeItem("multimedia_login");
    window.location.href = "./login.html";
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
      playBtn.textContent = "►";
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



  function CustomAlert(){
 
    this.alert = function(message,title){
      // document.body.innerHTML = document.body.innerHTML + '<div id="dialogoverlay"></div><div id="dialogbox" class="slit-in-vertical"><div><div id="dialogboxhead"></div><div id="dialogboxbody"></div><div id="dialogboxfoot"></div></div></div>';
      const wrapper = document.createElement("div");
wrapper.innerHTML = `
  <div id="dialogoverlay"></div>
  <div id="dialogbox" class="slit-in-vertical">
    <div>
      <div id="dialogboxhead"></div>
      <div id="dialogboxbody"></div>
      <div id="dialogboxfoot"></div>
    </div>
  </div>
`;
document.body.appendChild(wrapper);
  
      let dialogoverlay = document.getElementById('dialogoverlay');
      let dialogbox = document.getElementById('dialogbox');
      
      let winH = window.innerHeight;
      dialogoverlay.style.height = winH+"px";
      
      dialogbox.style.top = "100px";
  
      dialogoverlay.style.display = "block";
      dialogbox.style.display = "block";
      
      document.getElementById('dialogboxhead').style.display = 'block';
  
      if(typeof title === 'undefined') {
        document.getElementById('dialogboxhead').style.display = 'none';
      } else {
        document.getElementById('dialogboxhead').innerHTML = '<i class="fa fa-exclamation-circle" aria-hidden="true"></i> '+ title;
      }
      document.getElementById('dialogboxbody').innerHTML = message;
      document.getElementById('dialogboxfoot').innerHTML = '<button class="pure-material-button-contained active" onclick="customAlert.ok();">OK</button>';
    }
    
    this.ok = function(){
      document.getElementById('dialogbox').style.display = "none";
      document.getElementById('dialogoverlay').style.display = "none";
      playBtn.click();
    }

    // thunder_sfx.play(); rain_sfx.play();
    
      

  }

 let customAlert = new CustomAlert();

  




