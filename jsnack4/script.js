// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

const nomiacept = ["Angelo", "Francesco", "Samuele"];

const nomeUtente = prompt("inserisci il tuo nome");

let element = false;

for (let i = 0; i < nomiacept.length; i++) {
    
    if(nomeUtente === nomiacept[i]){
        element = true;
    }
}

if (element){
    alert("Accesso consentito");
} else {
    alert("Accesso negato")
}