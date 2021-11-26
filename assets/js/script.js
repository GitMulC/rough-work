/**
 * Core game mechanic
 * Uses boolean to check if attack lands.
 * If it hits, plays gore sound & gladiator loses hitpoint.
 * If blocks, plays block sound and no hit points lost.
 */
function getSwing () {
    return Math.floor(Math.random()*2);
}

function swing (swingSide) {
    let result = getSwing();
    let blockedAttack = result === swingSide;
    play(blockedAttack);
}


/**
 * Sounds played
 */
function play(blockedAttack) {
    var audio = document.getElementById("audio");
    audio.currentTime = 0;
    audio.play();
    if(blockedAttack) {
        audio1.play();
    } else {
        audio2.play();
    }
}
