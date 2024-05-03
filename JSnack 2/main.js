"use strict";

const firstWord = prompt("Inserisci la prima parola").length;
const secondWord = prompt("Inserisci la seconda parola").length;

console.log(firstWord);
console.log(secondWord);

if (firstWord < secondWord) {
  console.log("La seconda parola è più lunga");
} else if (firstWord > secondWord) {
  console.log("La prima parola è più lunga");
} else {
  console.log("Le due parole sono lunghe uguali");
}
