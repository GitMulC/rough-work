let swing1 = document.getElementById('left-swing');
let swing2 = document.getElementById('right-swing');
let swing = [swing1, swing2];

function getSwing (event) {
    return swing[Math.floor(Math.random()*swing.length)];
}
console.log(getSwing());

/**
 * Not working, don't know why. Want a listener to trigger when either div(swing1 & swing2) is clicked to run getSwing();
 * then check if the random one generated is the same as the one clicked and if it is counts as a block, and block sound will play.
 * Then if it isn't a block it's a successful hit on the gladiator who will lose one hitpoint.
 */
// swing1.addEventListener('click', getSwing()); 
// swing2.addEventListener('click', getSwing());
// document.querySelectorAll('div'); ???? How will this help?

/**
 * Not sure if this is done correctly?
 * What do I put in the item place?
 * How do I see this on the console to tell if it's working?
 */
document.querySelectorAll('.attack').forEach(item => {
    item.addEventListener('click', event => {
        return swing[Math.floor(Math.random()*swing.length)];
    })
})


/**
 * Plays sound when clicking divs
 */
function play() {
    var audio = document.getElementById("audio");
    audio.currentTime = 0;
    audio.play();
}