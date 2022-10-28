// Crea un array di numeri interi e fai la somma di tutti gli elementi  che sono in posizione dispari
const array = [
    1,
    2, 
    4,
    7, 
    3,
    2,
];

let sum = 0;
let result = 0;

for (let i = 0; i < array.length; i++) {
    const sum = i % 2 ;
    if(sum !== 0){
        result = result + array[i];
    }

}

console.log(result)