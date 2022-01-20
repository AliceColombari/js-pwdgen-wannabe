// Chiedi all’utente il suo nome,
// poi chiedi il suo cognome,
// poi chiedi il suo colore preferito
// Infine scrivi sulla pagina nomecognomecolorepreferito21

// Messaggio iniziale
// per andare a capo con le righe \n
alert('Genera una password! \n Usa il generatore di password per creare una password sicura!');


// Chiedo all'utente il suo nome
let name = prompt('Digita il tuo nome');
console.log("Nome: " + name);


// Chiedo all'utente il suo cognome
let lastName = prompt('Digita il tuo cognome');
console.log("Cognome: " + lastName);


// Chiedo all'utente il suo colore preferito
let color = prompt('Digita il tuo colore preferito');
console.log("Colore preferito: " + color);


// Cifre finali password
let lastNumber = "21";


// Dati finali raccolti
let password = "La password generata è: " + name + lastName + color + lastNumber;
console.log(password);


// Mostra risultato nella pagina
document.getElementById('risultato').innerHTML = password;