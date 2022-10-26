// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const nomeUtente = prompt("inserisci il tuo nome");

const nomiacept = ["Angelo", "Francesco", "Samuele"];

let element = false;

for (let i = 0; i < nomiacept.length; i++) {
    
    if(nomeUtente === nomiacept){
        element = true;
    }
}

if (element){
    alert("Accesso consentito");
} else {
    alert("Accesso negato")
}