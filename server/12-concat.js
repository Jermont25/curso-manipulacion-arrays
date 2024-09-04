const elements = [1, 1, 2, 2];
const othersElements = [3, 3, 4, 4];

let newArray = [...elements];

for (let index = 0; index < othersElements.length; index++) {
  const element = othersElements[index];
  newArray.push(element);
}

console.log(newArray);

const arrayConcat = elements.concat(othersElements);

console.log(arrayConcat);

const arrayConcatSpreadOperation = [...elements, ...othersElements];

console.log(arrayConcatSpreadOperation);

// Si se quiere mutar el array original se puede usar push

elements.push(...othersElements); // Se usa el spread operation para acceder a los datos del array

console.log(elements);
