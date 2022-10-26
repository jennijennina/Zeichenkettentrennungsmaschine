// Variablen bennen und deklarieren
let zeichenkette = document.getElementById("zeichenkette");
let trennung = document.getElementById("trennung");
let davor = document.getElementById("davor");
let danach = document.getElementById("danach");
let vordererTeil = document.getElementById("vordererTeil");
let hintererTeil = document.getElementById("hintererTeil");

// Funktion initiieren
function absenden() {
  // Inhalt Zeichenkette ausgeben und vergleichen mit Trennung
  // Abfrage davor oder danach if else
  let e = zeichenkette.value.indexOf(trennung.value);
  if (davor.checked) {
    let vorne = zeichenkette.value.slice(0, e);
    let hinten = zeichenkette.value.slice(e);
    vordererTeil.innerHTML = vorne;
    hintererTeil.innerHTML = hinten;
  } else {
    let e = zeichenkette.value.indexOf(trennung.value);
    let y = trennung.value.length;
    let vorne = zeichenkette.value.slice(0, e + y);
    let hinten = zeichenkette.value.slice(e + y);
    vordererTeil.innerHTML = vorne;
    hintererTeil.innerHTML = hinten;
  }
}
