"use strict";

const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");

console.log(firstWord);
console.log(secondWord);

if (firstWord < secondWord) {
  console.log("La seconda parola è più lunga");
} else if (firstWord > secondWord) {
  console.log("La seconda parola è più lunga");
} else {
  console.log("Le due parole sono lunghe uguali");
}
