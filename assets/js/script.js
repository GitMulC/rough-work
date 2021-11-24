
/**
 * Plays sound when clicking divs
 */
function play() {
    var audio = document.getElementById("audio");
    audio.currentTime = 0;
    audio.play();
}