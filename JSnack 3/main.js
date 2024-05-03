"use strict";

let addition = 0;

for (let index = 0; index < 10; index++) {
  const userNumber = parseInt(prompt(`${index} di 10 - Inserisci un numero`));
  console.log(userNumber);
  addition += userNumber;
}

console.log(addition);
