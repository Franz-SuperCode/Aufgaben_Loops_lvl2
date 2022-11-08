//Inputfeld Zahl eingeben
//Funktion die Loop ins HTML schreibt
// Die Anzahl der Buchstaben "o" von loop varriert durch die Eingabe
//Dafür muss was ins Array rein
//Und dann das in ein String umwandeln
let arrayLoop = ["L", "p"]
let button = document.querySelector("#loop");
let output = document.querySelector("#output");

button.addEventListener("click", () => {

    let input = Number(document.querySelector("#input").value);

    // Solange die Zahl vom Input <= 2 ist, soll ein "o" eingefügt werden
    for (let i = 1; i <= input; i++) {
        arrayLoop.splice(1, 0, "o");
    }
    // Das Array in einen Tring umwandeln
    let arrayToString = arrayLoop.join("");
    // Den String der Methode übergeben
    write(arrayToString);
    //Array wieder zurücksetzen
    arrayLoop = ["L", "p"];
})

// Ins HTML den String schreiben
const write = (arrayToString) => {
    output.innerHTML = arrayToString;
}



