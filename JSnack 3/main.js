"use strict";

let addition = 0;

for (let index = 0; index < 10; index++) {
  const userNumber = parseInt(prompt("Inserisci un numero"));
  console.log(userNumber);
  addition += userNumber;
}

console.log(addition);
