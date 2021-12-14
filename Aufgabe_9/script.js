var P2;
(function (P2) {
    window.addEventListener("load", function () {
        let input = document.querySelector("#eingabeText");
        let index = 0;
        // Zähler für die Anzahl von Aufgaben
        function total() {
            document.getElementById("total").innerHTML = String(index);
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
            index++;
            total();
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
                index--;
                total();
            });
            task?.append(deletetask);
        }
        // Aufgabe lässt sich abhaken bzw den Haken rückgängig machen
        // hier wird irgendwie immer nur die oberste Aufgabe ausgewählt anstatt die Aufgabe die man anklickt :/
        function erledigen() {
            if (document.getElementById("check").getAttribute("class") == "far fa-hand-point-right") {
                document.getElementById("check").setAttribute("class", "fas fa-thumbs-up");
            }
            else if (document.getElementById("check").getAttribute("class") == "fas fa-thumbs-up") {
                document.getElementById("check").setAttribute("class", "far fa-hand-point-right");
            }
        }
    });
})(P2 || (P2 = {}));
//# sourceMappingURL=script.js.map