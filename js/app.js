//scrivi un programma che stampi in console i numeri da 1 a 100
//Come faccio a sapere se un numero è divisibile per un altro?
//Utilizzando l'operatore modulo che ci dirà che se il resto dell'operazione è zero allora il numero è divisibile per un altro.

for (let i = 1; i <= 100; i++) {

    //Aggiungi un controllo sul numero
    //Per i multipli che sono sia multipli di 3 che di 5 stampare "FizzBuzz"

if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
}
   //Per i multipli di 3 stampare "Fizz" al posto del numero
    else if (i % 3 === 0) {
        console.log('Fizz');
    }

//Per i multipli di 5 stampare "Buzz" al posto del numero

    else if (i % 5 === 0) {
        console.log('Buzz');
    }

    else {
        console.log('Nume:' + i);
    }

}

