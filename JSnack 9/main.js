/*   **_ Snack 9 _**
Calcola la somma e la media dei primi 10 numeri.
Stampa i risultati in console   */

"use strict";

// Variabile di inzio della somma e di quanti cicli deve fare il for
let sum = 0;
const counter = 10;

// Ciclo for che genera cicli e li stampa in console
for (let i = 1; i <= counter; i++) {
  const numberGenerated = i;
  console.log("Il numero generato è ", numberGenerated);

  // Aggiungo i numeri generati alla variabile somma e stampo in console
  sum += numberGenerated;
  console.log("La somma totale è", sum);

  // Calcolo la media dei primi 10 numeri
  const averageNumber = sum / i;
  console.log("La media dei numeri inseriti è", averageNumber);
}
