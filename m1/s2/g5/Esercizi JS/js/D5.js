/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
    Dato il seguente array, scrivi del codice per stampare ogni elemento dell'array in console.
*/
const pets = ['dog', 'cat', 'hamster', 'redfish']

console.log(pets[0],pets[1],pets[2],pets[3]);

/* ESERCIZIO 2
    Scrivi del codice per ordinare alfabeticamente gli elementi dell'array "pets".
*/

pets.sort();


/* ESERCIZIO 3
    Scrivi del codice per stampare nuovamente in console gli elementi dell'array "pets", questa volta in ordine invertito.
*/

console.log(pets.reverse());

/* ESERCIZIO 4
    Scrivi del codice per spostare il primo elemento dall'array "pets" in ultima posizione.
*/

pets.push(pets.shift());
console.log(pets);

/* ESERCIZIO 5
    Dato il seguente array di oggetti, scrivi del codice per aggiungere ad ognuno di essi una proprietà "licensePlate" con valore a tua scelta.
*/
const cars = [
  {
    brand: 'Ford',
    model: 'Fiesta',
    color: 'red',
    trims: ['titanium', 'st', 'active'],
  },
  {
    brand: 'Peugeot',
    model: '208',
    color: 'blue',
    trims: ['allure', 'GT'],
  },
  {
    brand: 'Volkswagen',
    model: 'Polo',
    color: 'black',
    trims: ['life', 'style', 'r-line'],
  },
]

cars.forEach(function(license){
  license.licensePlate = Math.random()
});

console.log(cars);

/* ESERCIZIO 6
    Scrivi del codice per aggiungere un nuovo oggetto in ultima posizione nell'array "cars", rispettando la struttura degli altri elementi.
    Successivamente, rimuovi l'ultimo elemento della proprietà "trims" da ogni auto.
*/

const newCar = {};
newCar.brand = 'Toyota';
newCar.model = 'Aygo';
newCar.color = 'red';
newCar.licensePlate = Math.random();
newCar.trims = ['titanium', 'st', 'active'];

cars.push(newCar);

for(let i = 0; i < cars.length; i++){
  cars[i].trims.pop();
}

console.log(cars);



/* ESERCIZIO 7
    Scrivi del codice per salvare il primo elemento della proprietà "trims" di ogni auto nel nuovo array "justTrims", sotto definito.
*/
const justTrims = []

for(let p = 0; p < cars.length; p++){
  justTrims.push(cars[p].trims[0]);
}

console.log(justTrims);

/* ESERCIZIO 8
    Cicla l'array "cars" e costruisci un if/else statament per mostrare due diversi messaggi in console. Se la prima lettera della proprietà
    "color" ha valore "b", mostra in console "Fizz". Altrimenti, mostra in console "Buzz".
*/

for(let j = 0; j < cars.length; j++){
  if(cars[j].color.startsWith('b')){
    console.log('Fizz');
  }else{
    console.log('Buzz');
  }
}

/* ESERCIZIO 9
    Utilizza un ciclo while per stampare in console i valori del seguente array numerico fino al raggiungimento del numero 32.
*/
const numericArray = [
  6, 90, 45, 75, 84, 98, 35, 74, 31, 2, 8, 23, 100, 32, 66, 313, 321, 105,
]

console.log(numericArray.indexOf(32));

let q = 0;

while(q < 14){
  console.log(numericArray[q]);
  q++;
}

/* ESERCIZIO 10
    Partendo dall'array fornito e utilizzando un costrutto switch, genera un nuovo array composto dalle posizioni di ogni carattere all'interno
    dell'alfabeto italiano.
    es. [f, b, e] --> [6, 2, 5]
*/
const charactersArray = ["g", "n", "u", "z", "d"]

{
  let numericAlphabetArray = [];

  for(k = 0; k < charactersArray.length; k++){
  switch(charactersArray[k]){
    case "a": 
    charactersArray[k] = 1;
    numericAlphabetArray.push(charactersArray[k]);
    break;
    case "b": 
    charactersArray[k] = 2;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "c":
    charactersArray[k] = 3;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "d":
    charactersArray[k] = 4;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "e":
    charactersArray[k] = 5;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "f":
    charactersArray[k] = 6;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "g":
    charactersArray[k] = 7;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "h":
    charactersArray[k] = 8;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "i":
    charactersArray[k] = 9;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "l":
    charactersArray[k] = 10;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "m":
    charactersArray[k] = 11;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "n":
    charactersArray[k] = 12;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "o":
    charactersArray[k] = 13;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "p":
    charactersArray[k] = 14;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "q":
    charactersArray[k] = 15;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "r":
    charactersArray[k] = 16;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "s":
    charactersArray[k] = 17;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "t":
    charactersArray[k] = 18;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "u":
    charactersArray[k] = 19;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "v":
    charactersArray[k] = 20;
    numericAlphabetArray.push(charactersArray[k])
    break;
    case "z":
    charactersArray[k] = 21;
    numericAlphabetArray.push(charactersArray[k])
    
    
  }
}

console.log(numericAlphabetArray);

}


