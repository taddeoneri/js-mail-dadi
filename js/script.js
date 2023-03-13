/*
Mail

Chiedi all’utente la sua email,
controlla che sia nella lista di chi può accedere,
stampa un messaggio appropriato sull’esito del controllo.
*/


const email = [
    'lacy72@hotmail.com',
    'belle74@hotmail.com',
    'rodrigo28@gmail.com',
    'cheaney@gmail.com',
    'morar.griffin@yahoo.com',
    'vzieme@russel.biz',
    'ijacobson@yahoo.com',
    'casimir52@powlowski.com',
    'gstehr@schuppe.com',
    'hessel.brice@kessler.info',
    'darren18@gmail.com',
    'elisha78@hotmail.com',
    'mclaughlin.leila@hotmail.com',
    'bechtelar.elenora@yahoo.com',
    'kristin42@gmail.com',
    'roob.julie@gmail.com',
    'bobbie.crist@gmail.com',
    'damore.hosea@hessel.org',
    'dmills@gmail.com',
    'marvin.fahey@mosciski.org'
];

let guest;

const btnEmail = document.getElementById('btnEmail');

btnEmail.addEventListener('click', function(){
    let emailUser = document.getElementById('email').value;
    for(let i = 0; i < email.length; i++){
        if(emailUser.toLowerCase() === email[i].toLowerCase()){
            guest = 0;
        }
    }
    if(guest == 0){
        return document.getElementById('box').innerHTML += `
            <h4 class="my-3">Verified email, you will be redirected to the page in a few seconds.</h4>
        `
    } else{
        return document.getElementById('box').innerHTML += `
            <h4 class="my-3 text-danger">Unauthorized email, please unsubscribe again.</h4>
        `
    }
});


/*
Gioco dei dadi

Generare un numero random da 1 a 6, sia per il giocatore sia per il computer.
Stabilire il vincitore, in base a chi fa il punteggio più alto.
*/

let number1;
let number2;

const btnNumber1 = document.getElementById('btnNumber1');
const btnNumber2 = document.getElementById('btnNumber2');
const btnWinner = document.getElementById('btnWinner');

btnNumber1.addEventListener('click', function(){
    number1 = getRandomInt(1, 6);
    return document.getElementById('random1').innerHTML += number1;
});

btnNumber2.addEventListener('click', function(){
    number2 = getRandomInt(1, 6);
    return document.getElementById('random2').innerHTML += number2;
});

btnWinner.addEventListener('click', function(){
    if(number1 > number2){
        return document.getElementById('cardChecked').innerHTML += `
        <h4 class="my-3 text-center">Player one won.</h4>
        `
    } else if (number1 < number2){
        return document.getElementById('cardChecked').innerHTML += `
        <h4 class="my-3 text-center">Player two won.</h4>
        `
    } else{
        return document.getElementById('cardChecked').innerHTML += `
        <h4 class="my-3 text-center">The two numbers are equal, parity</h4>
        `
    }
})



function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

