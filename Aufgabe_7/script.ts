namespace A07{
window.addEventListener("load", function (){


var sound:HTMLAudioElement[]= [new Audio("assets/A.mp3"), new Audio("assets/C.mp3"), new Audio("assets/F.mp3"),
                 new Audio("assets/G.mp3"), new Audio("assets/hihat.mp3"), new Audio("assets/kick.mp3"),
                 new Audio("assets/laugh-1.mp3"), new Audio("assets/laugh-2.mp3"), 
                 new Audio("assets/snare.mp3")];


function playbeat(){
    setInterval(function() {
        sound[4].play();
    }, 2500);
    setInterval(function () {
        sound[5].play();
    }, 1000);
    setInterval(function () {
        sound[8].play();
    },500);
}

function playSample(sample) {
    sample.play();
}

document.getElementById("obenlinks").addEventListener("click", function () { playSample(sound[0]); });
document.querySelector("#obenmitte").addEventListener("click", function () { playSample(sound[1]); });
document.getElementById("obenrechts").addEventListener("click", function () { playSample(sound[2]); });
document.getElementById("mittelinks").addEventListener("click", function () { playSample(sound[3]); });
document.getElementById("mittemitte").addEventListener("click", function () { playSample(sound[4]); });
document.getElementById("mitterechts").addEventListener("click", function () { playSample(sound[5]); });
document.getElementById("untenlinks").addEventListener("click", function () { playSample(sound[6]); });
document.getElementById("untenmitte").addEventListener("click", function () { playSample(sound[7]); });
document.getElementById("untenrechts").addEventListener("click", function () { playSample(sound[8]); });
document.getElementById("playbutton").addEventListener("click", playbeat);

})
}