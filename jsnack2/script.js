// L’utente inserisce due parole in successione, con due prompt.
// Il software stampa prima la parola più corta, poi la parola più lunga.

const parola1 = prompt("inserire prima parola");
const parola2 = prompt("inserire la seconda parola");

if(parola1.length > parola2.length) {
    console.log(parola2)
    console.log(parola1)
} else {
    console.log(parola1)
    console.log(parola2)
}