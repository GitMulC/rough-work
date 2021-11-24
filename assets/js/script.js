var swing1 = document.getElementsByClassName('left-swing');
var swing2 = document.getElementsByClassName('right-swing');
var swing = [swing1, swing2];

// swing1.addEventListener("click", getSwing);
// swing2.addEventListener("click", getSwing);
function getSwing () {
    return swing[Math.floor(Math.random()*swing.length)];
    // if (getSwing === ){

    // }
}
console.log(getSwing());



/**
 * Plays sound when clicking divs
 */
function play() {
    var audio = document.getElementById("audio");
    audio.currentTime = 0;
    audio.play();
}