namespace P2 {
    window.addEventListener ("load", function (): void {
    
    let input: HTMLInputElement = document.querySelector("#eingabeText");
    let index: number = 0;
    
    
    // Zähler für die Anzahl von Aufgaben
    function total (): void {
        document.getElementById("total").innerHTML = String(index);
    }
    
    
    // bei Enter die Aufgabe hinzufügen
    input.addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            addTextToHtml();
        }
    });
    
    
    
    // Aufgabe wird hinzugefügt
    function addTextToHtml(): void {
        console.log(input);
    
        // Aufgabenzähler
        index++;
        total ();
    
        let textVonEingabefeld: string;
    
        // Texteingabefeld leeren
        if (input.value != "") textVonEingabefeld = input.value;
        
        input.value = "";
        
    
        // Elemente in die Aufgabe einbauen
        const tasklist: HTMLElement = document.getElementById("tasklist");
    
        // Ramenelement
        const task: HTMLElement = document.createElement("div");
        task.id = "task";
    
        tasklist.appendChild(task);
    
        // Element zum Abhaken
        const check: HTMLElement = document.createElement("div");
        check.id = "check";
        check.setAttribute("class", "far fa-hand-point-right");
        check.addEventListener("click", erledigen);
    
        task?.append(check);
    
        // Textfeld mit der Aufgabe
        const p: HTMLParagraphElement = document.createElement("p");
        p.textContent = textVonEingabefeld;
    
        task?.appendChild(p);
    
        // Element zum Löschen der Aufgabe
        const deletetask: HTMLElement = document.createElement("div");
        deletetask.id = "deletetask";
        deletetask.setAttribute("class", "far fa-thumbs-down");
        deletetask.addEventListener("click", function (): void { 
            tasklist.removeChild(task), task.removeChild(check); task.removeChild(p); task.removeChild(deletetask); 
            index--;
            total ();
        });
    
        task?.append(deletetask);
    
    }
    
    // Aufgabe lässt sich abhaken bzw den Haken rückgängig machen
    function erledigen(): void {
    
        if (this.getAttribute("class") == "far fa-hand-point-right") {
            this.setAttribute("class", "fas fa-thumbs-up");
            
        }
        else if (this.getAttribute("class") == "fas fa-thumbs-up") {
            this.setAttribute("class", "far fa-hand-point-right");
        }
    }
    
    
    
    
    
    
    });
    }