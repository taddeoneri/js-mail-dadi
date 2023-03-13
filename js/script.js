/*

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

const button = document.querySelector('button');

button.addEventListener('click', function(){
    let emailUser = document.getElementById('email').value;
    for(let i = 0; i < email.length; i++){
        if(emailUser.toLowerCase() === email[i].toLowerCase()){
            guest = 0;
        }
    }
    if(guest == 0){
        document.getElementById('box').innerHTML += `
            <h4 class="my-3">Verified email, you will be redirected to the page in a few seconds.</h4>
        `
    } else{
        document.getElementById('box').innerHTML += `
            <h4 class="my-3">Unauthorized email, please unsubscribe again.</h4>
        `
    }
});
