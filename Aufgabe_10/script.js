var P2;
(function (P2) {
    window.addEventListener("load", function () {
        let input = document.querySelector("#eingabeText");
        let indextotal = 0;
        let indexopen = 0;
        let indexdone = 0;
        const artyom = new Artyom();
        // Zähler für die Anzahl von Aufgaben
        function total() {
            document.getElementById("total").innerHTML = String(indextotal);
        }
        function open() {
            document.getElementById("open").innerHTML = String(indexopen);
        }
        function done() {
            document.getElementById("done").innerHTML = String(indexdone);
        }
        // bei Enter die Aufgabe hinzufügen
        input.addEventListener("keydown", function (event) {
            if (event.key === "Enter") {
                addTextToHtml();
            }
        });
        // Aufgabe wird hinzugefügt
        function addTextToHtml() {
            console.log(input);
            // Aufgabenzähler
            indextotal++;
            total();
            indexopen++;
            open();
            let textVonEingabefeld;
            // Texteingabefeld leeren
            if (input.value != "")
                textVonEingabefeld = input.value;
            input.value = "";
            // Elemente in die Aufgabe einbauen
            const tasklist = document.getElementById("tasklist");
            // Ramenelement
            const task = document.createElement("div");
            task.id = "task";
            tasklist.appendChild(task);
            // Element zum Abhaken
            const check = document.createElement("div");
            check.id = "check";
            check.setAttribute("class", "far fa-hand-point-right");
            check.addEventListener("click", erledigen);
            task?.append(check);
            // Textfeld mit der Aufgabe
            const p = document.createElement("p");
            p.textContent = textVonEingabefeld;
            task?.appendChild(p);
            // Element zum Löschen der Aufgabe
            const deletetask = document.createElement("div");
            deletetask.id = "deletetask";
            deletetask.setAttribute("class", "far fa-thumbs-down");
            deletetask.addEventListener("click", function () {
                tasklist.removeChild(task), task.removeChild(check);
                task.removeChild(p);
                task.removeChild(deletetask);
                indextotal--;
                total();
                if (document.getElementById("check").getAttribute("class") == "far fa-hand-point-right") {
                    indexopen--;
                    open();
                }
                else if (document.getElementById("check").getAttribute("class") == "fas fa-thumbs-up") {
                    indexdone--;
                    done();
                }
            });
            task?.append(deletetask);
        }
        // Aufgabe lässt sich abhaken bzw den Haken rückgängig machen
        function erledigen() {
            if (this.getAttribute("class") == "far fa-hand-point-right") {
                this.setAttribute("class", "fas fa-thumbs-up");
                indexopen--;
                open();
                indexdone++;
                done();
            }
            else if (this.getAttribute("class") == "fas fa-thumbs-up") {
                this.setAttribute("class", "far fa-hand-point-right");
                indexopen++;
                open();
                indexdone--;
                done();
            }
        }
        // Artyom hört, ob 'erstelle Aufgabe' gesagt wird und nimmt die Worte danach auf
        artyom.addCommands({
            indexes: ["erstelle Aufgabe *"],
            smart: true,
            action: function (i, wildcard) {
                console.log("Neue Aufgabe wird erstellt: " + wildcard);
                addTextToHtml(wildcard);
            }
        });
        // Sprachaufnahme muss erst aktiviert werden
        function startRecording() {
            console.log("start");
            artyom.fatlity();
            setTimeout(function () {
                artyom.initialize({
                    lang: "de-DE",
                    continuos: true,
                    debug: true
                }).then(function () {
                    console.log("redy for recording");
                });
            }, 250);
        }
        // Klickfunktion auf das Mikrophon-Icon, wodurch die Sprachaufnahme aktiviert wird
        this.document.querySelector("#artyom").addEventListener("click", function () {
            startRecording();
            document.querySelector("#artyom").disabled = true;
            if (document.getElementById("artyom").getAttribute("class") == "fas fa-microphone-slash") {
                document.getElementById("artyom").setAttribute("class", "fas fa-microphone");
            }
        });
    });
})(P2 || (P2 = {}));
//# sourceMappingURL=script.js.map