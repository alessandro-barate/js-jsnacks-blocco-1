/*      **_ Snack 5 _**
    Crea un array vuoto.
    Chiedi per 6 volte all’utente di inserire un numero,
    Se è dispari inseriscilo nell’array.
    Stampa in console l'array risultante.      */

// Dichiaro l'array
const userNumbers = [];

// Dichiaro la variabile di quante volte il ciclo deve ripetersi
const count = 6;

// Dichiaro il ciclo for
for (let i = 0; i < count; i++) {
  userNumbers[i] = parseInt(
    prompt(`${i + 1} di ${count} - Inserisci un numero`)
  );
  console.log(i);

  if (userNumbers % 2 === false) {
    userNumbers.push(userInput);
  }
}

console.log(userNumbers);

//if numero % 2 --> .push nell'array

//console.log(userInput);
