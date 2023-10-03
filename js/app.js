// - Chiedere all'utente il suo nome:
//     - dichiarare una variabile
let userName;
//     - assegnare alla variabile il valore restituito dal prompt
userName = prompt ('Nome');
console.log(userName);
// - Chiedere all'utente il suo cognome:
//     - dichiarare una variabile
let userSurname;
//     - assegnare alla variabile il valore restuitutio dal prompt
userSurname = prompt ('Cognome');
console.log(userSurname);
// - Chiedere all'utente il suo colore preferito
//     - dichiarare una variabile
let userPrefColor;
//     - assegnare alla variabile il valore restuitutio dal prompt
userPrefColor = prompt ('Colore Preferito');
console.log(userPrefColor);
// - Assegnare un numero random:
//     - dichiarare una variabile
//     - specificare la funzione per un numero a caso
const randomNumber = Math.floor(Math.random() * 100);
  console.log(randomNumber);
// - Concatenare le 4 variabili per formare una password
//     - dichiarare una variabile passwordGeneration dove concateno le 4 stringhe
let passwordGeneration = userName + userSurname + userPrefColor + randomNumber
console.log(passwordGeneration);
// - Stampare la password nel dom
//     - inserire nell'html una tag con classe password
//     - recuperare con js gli lementi del dom con id = passwordGeneration
const pswDomElement = document.getElementById('password');
//     - modificare l'innerHTML del tag con il valore della variabile passwordGeneration 
pswDomElement.innerHTML = passwordGeneration;