/*  **_ Snack 8 _**
Chiedi un numero di 4 cifre all’utente
Calcola la somma di tutte le cifre che compongono il numero.
Stampa il risultato in console  */

"use strict";

// Dichiaro la variabile che chiede all'utente di digitare un numero di 4 cifre e stampo il numero in console
let userNumber = Number(prompt("Inserisci un numero di 4 cifre"));
console.log(userNumber);

// Dichiaro la variabile della somma delle cifre a 0
let digitSum = 0;

// Ciclo while che va a scomporre il numero nelle sue cifre
while (userNumber > 0) {
  let unit = userNumber % 10;
  userNumber = userNumber - unit;
  userNumber = userNumber / 10;
  digitSum = digitSum + unit;
}

// Stampo in console la somma delle cifre
console.log(digitSum);
