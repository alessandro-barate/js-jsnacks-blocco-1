/*  **_ Snack 8 _**
Chiedi un numero di 4 cifre all’utente
Calcola la somma di tutte le cifre che compongono il numero.
Stampa il risultato in console  */

"use strict";

let userNumber = Number(prompt("Inserisci un numero di 4 cifre"));
console.log(userNumber);

let userNumberLength = userNumber.length;

let digitSum = 0;

while (userNumber > 0) {
  let unit = userNumber % 10;
  userNumber = userNumber - unit;
  userNumber = userNumber / 10;
  digitSum = digitSum + unit;
}

console.log(digitSum);
