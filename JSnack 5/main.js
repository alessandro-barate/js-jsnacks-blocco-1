/*      **_ Snack 5 _**
    Crea un array vuoto.
    Chiedi per 6 volte all’utente di inserire un numero,
    Se è dispari inseriscilo nell’array.
    Stampa in console l'array risultante.      */

"use strict";

// Dichiaro l'array
const userNumbers = [];

// Dichiaro la variabile di quante volte il ciclo deve ripetersi
const count = 6;

// Dichiaro il ciclo for
for (let i = 0; i < count; i++) {
  const userInput = parseInt(
    prompt(`${i + 1} di ${count} - Inserisci un numero`)
  );
  console.log("L'utente ha inserito ", userInput);

  // Condizione per verificare se il numero è dispari, se lo è lo inserisco nell'array e stampo quest'ultimo in console
  if (userInput % 2 !== 0) {
    userNumbers.push(userInput);
  }
  console.log(userNumbers);
}
