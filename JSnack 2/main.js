"use strict";

const firstWord = prompt("Inserisci la prima parola");
const secondWord = prompt("Inserisci la seconda parola");

const firstWordLenght = firstWord.length;
const secondWordLenght = secondWord.length;

console.log(firstWord);
console.log(secondWord);

if (firstWordLenght < secondWordLenght) {
  console.log(firstWord, secondWord);
} else if (firstWordLenght > secondWordLenght) {
  console.log(secondWord, firstWord);
} else {
  console.log("Le due parole sono lunghe uguali");
}
