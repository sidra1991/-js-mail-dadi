
// Mail
// Chiedi all’utente la sua email,

// controlla che sia nella lista di chi può accedere,

const controlEmail = ['canebagnato@libero.it', 'pupazzo81@gmail.com', 'cricetorusso@htmail.com', 'puzzadipiedi@gmail.com', 'puzzolone@libero.it', 'bimbomatto@example.com'];
let userEmail = prompt("inserisci la tue email")

for (let i = 0; i < controlEmail.length; i++) {

    if (userEmail != controlEmail[i]) {
        controlEmail.push(userEmail);
        document.querySelector(`#email`).innerHTML=`ben venuto ${userEmail}`

    } else {
        document.querySelector(`#email`).innerHTML=`ben tornato ${userEmail}`
    }
}


// stampa un messaggio appropriato sull’esito del controllo.




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.


let player = Math.floor(Math.random() * 7);
let computer = Math.floor(Math.random() * 7);

document.querySelector(`.first`).innerHTML=`${player}`
document.querySelector(`.second`).innerHTML=`${computer}`


// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (player < computer) {
    document.querySelector(`.winner`).innerHTML=`vincitore è computer`
} else {
    document.querySelector(`.winner`).innerHTML=`vincitore è player`
}


