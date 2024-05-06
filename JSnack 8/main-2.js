"use strict";

let result = 0;

const userInput = prompt("Inserisci un numero di 4 cifre");

if (userInput.length === 4) {
  if (!isNaN(Number(userInput))) {
    for (let index = 0; index < userInput.length; index++) {
      result += parseInt(userInput.charAt(index));
    }
  } else {
    console.log("Inserisci un numero");
  }
} else {
  console.log("Il numero inserito non è di 4 cifre");
}

console.log(result);
