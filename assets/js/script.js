document.getElementById("startGame").addEventListener("click", function() {
    alert("FIGHT!");
  });

function play() {
    var audio = document.getElementById("audio");
    audio.currentTime = 0;
    audio.play();
}