document.addEventListener("DOMContentLoaded", function() {
    const audio = document.getElementById("background-music");
    document.body.addEventListener("click", function() {
        audio.play();
    }, { once: true }); 
  });