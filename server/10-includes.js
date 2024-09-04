const pets = ['cat', 'dog', 'bat'];

let includeInArray = false;

for (let index = 0; index < pets.length; index++) {
  const element = pets[index];

  if (element === 'cat') {
    includeInArray = true;
    break;
  }
}

console.log(includeInArray);

const includeInArray2 = pets.includes('dog');

console.log(includeInArray2);

const string = 'Hola me llamo Thalía';

const searchWord = string.toLowerCase().includes('hola');

console.log(searchWord);
