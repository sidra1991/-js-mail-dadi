alert('work in progress')


// Mail
// Chiedi all’utente la sua email,

// controlla che sia nella lista di chi può accedere,
// const controlEmail = ['canebagnato@libero.it', 'pupazzo81@gmail.com', 'cricetorusso@htmail.com', 'aaa']
// let zero = 0
// let userEmail = prompt()

// for (let i = 0; i < controlEmail.length; i++) {

//     if (userEmail == controlEmail[i]) {
//         alert("cambia email");
//         let userEmail2 = prompt();
//         for (let i = 0; i < controlEmail.length; i++) {
//             if (userEmail2 == controlEmail[i]) {
//                 alert(" e mo basta");

//             }
//         }
//     }
// }

// alert("fine")


// stampa un messaggio appropriato sull’esito del controllo.




// Gioco dei dadi
// Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.


let player = Math.floor(Math.random() * 7);
let computer =  Math.floor(Math.random()*7);


console.log(player, computer)


// Stabilire il vincitore, in base a chi fa il punteggio più alto.

if (player < computer) {
    alert(`computer ween ${computer} `)
} else {
    alert(`player ween  ${player} `)
}


