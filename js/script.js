alert('work in progress')


// Mail
// Chiedi all’utente la sua email,

// controlla che sia nella lista di chi può accedere,
    const controlEmail = [ 'canebagnato@libero.it','pupazzo81@gmail.com','cricetorusso@htmail.com','aaa' ]
    let zero = 0
    let userEmail = prompt( )

    for (let i = 0; i < controlEmail.length; i++) {
        
        if ( userEmail == controlEmail[i] ) {
            alert("cambia email");
            let userEmail2 = prompt();
            for (let i = 0; i < controlEmail.length; i++) {
                if ( userEmail2 == controlEmail[i] ) {
                    alert(" e mo basta");
            
                }
            }    
        }
    }
  
    alert("fine")


// stampa un messaggio appropriato sull’esito del controllo.

    


// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
// let number = Math.random()

// console.log(number)


// Stabilire il vincitore, in base a chi fa il punteggio più alto.
// Prima di partire a scrivere codice poniamoci qualche domanda:
// Che ci sia un array da qualche parte?
// Se dobbiamo confrontare qualcosa che "cosa" ci serve?
// Consigli del giorno:
// 1. scriviamo sempre prima dei commenti in italiano per capire cosa vogliamo fare
// 2. javascript non fa nulla da solo, dobbiamo dirgli noi cosa vogliamo fare
// 3. si ma noi cosa vogliamo fare?
// 4. torniamo a scrivere in italiano
// 5. proviamo ad immaginare le operazioni che vogliamo far svolgere al nostro programma così come lo faremmo "a mano"
// Bonus:
// Usiamo un input e un bottone per inserire la mail e poi mostriamo i risultati in pagina.
// Buon lavoro e buon divertimento! :faccia_leggermente_sorridente:

