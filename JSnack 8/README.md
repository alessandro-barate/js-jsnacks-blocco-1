**_ Snack 8 _**
Chiedi un numero di 4 cifre all’utente
Calcola la somma di tutte le cifre che compongono il numero.
Stampa il risultato in console

variabile con prompt per chiedere un numero di 4 cifre
dichiaro una variabile iniziale di somma delle cifre e la setto a 0

ciclo while con condizione che il numero sia maggiore di 0, per andare a lavorare sul numero fino a quando non arriva a 0
usando il modulo di 10 posso ottenere le varie cifre
numero % 10 --> il resto è l'unità, che poi tolgo dal numero perchè gia usato.
divido questo numero per 10, perchè mi serve lavorare sulla cifra seguente (da unità a decine, da decine a centinaia...)
reinizio il ciclo fino a quando arriverò ad avere la condizione 0 > 0 che è false, uscnedo così dal ciclo.
