var A08;
(function (A08) {
    window.addEventListener("load", function () {
        // sounds auf dem Drumpad
        var sound = ["assets/A.mp3", "assets/C.mp3", "assets/F.mp3",
            "assets/G.mp3", "assets/hihat.mp3", "assets/kick.mp3",
            "assets/laugh-1.mp3", "assets/laugh-2.mp3", "assets/snare.mp3"];
        var beatplay = [sound[4], sound[5], sound[8]];
        var index = 0;
        var beat;
        var beatRemix;
        // Drumpad Sounds abspielen
        function playSample(sample) {
            var sounds = new Audio(sample);
            sounds.play();
        }
        // Beat der abspielt beim Playbutton
        // Playbutton Klick Reaktion
        function beatplays() {
            if (document.getElementById("playbutton").getAttribute("class") == "fas fa-play") {
                document.getElementById("playbutton").setAttribute("class", "fas fa-stop");
                beat = setInterval(playbeat, 500);
            }
            else {
                document.getElementById("playbutton").setAttribute("class", "fas fa-play");
                clearInterval(beat);
            }
            function playbeat() {
                playSample(beatplay[index]);
                index++;
                if (index == 2) {
                    index = 0;
                }
            }
        }
        // Zufälliger Sound auswählen durch Nummer für den Remix
        var min = 0;
        var max = 8;
        var remixnumber = Math.round(Math.random() * (max - min)) + min;
        console.log(remixnumber);
        // Remixbutton Klick Reaktion
        function remix() {
            if (document.getElementById("remixbutton").getAttribute("class") == "fas fa-random") {
                document.getElementById("remixbutton").setAttribute("class", "fas fa-stop");
                beatRemix = setInterval(remixRechnung, 500);
            }
            else {
                document.getElementById("remixbutton").setAttribute("class", "fas fa-random");
                clearInterval(beatRemix);
            }
            function remixRechnung() {
                beatplay = [];
                beatplay.push(sound[remixnumber], sound[remixnumber + 1], sound[remixnumber + 2]);
                playSample(beatplay[index]);
                index++;
                if (index == 2) {
                    index = 0;
                }
            }
        }
        // um neuen Remix zu generieren, die Math.random Zahl ändern
        function deleteRemix() {
            beatplay = [];
            var remixnumber2 = Math.round(Math.random() * (max - min)) + min;
            remixnumber = remixnumber2;
        }
        // Aktionen bei Klick ausführen
        document.getElementById("obenlinks").addEventListener("click", function () { playSample(sound[0]); });
        document.querySelector("#obenmitte").addEventListener("click", function () { playSample(sound[1]); });
        document.getElementById("obenrechts").addEventListener("click", function () { playSample(sound[2]); });
        document.getElementById("mittelinks").addEventListener("click", function () { playSample(sound[3]); });
        document.getElementById("mittemitte").addEventListener("click", function () { playSample(sound[4]); });
        document.getElementById("mitterechts").addEventListener("click", function () { playSample(sound[5]); });
        document.getElementById("untenlinks").addEventListener("click", function () { playSample(sound[6]); });
        document.getElementById("untenmitte").addEventListener("click", function () { playSample(sound[7]); });
        document.getElementById("untenrechts").addEventListener("click", function () { playSample(sound[8]); });
        document.getElementById("playbutton").addEventListener("click", beatplays);
        document.getElementById("remixbutton").addEventListener("click", remix);
        document.getElementById("trashbutton").addEventListener("click", deleteRemix);
    });
})(A08 || (A08 = {}));
//# sourceMappingURL=script.js.map