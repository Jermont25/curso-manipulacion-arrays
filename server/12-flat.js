const matriz = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, 3]],
  [7, 8, 9],
];
let flatArray = [];

for (let i = 0; i < matriz.length; i++) {
  const array = matriz[i];

  for (let j = 0; j < array.length; j++) {
    const element = array[j];
    flatArray.push(element);
  }
}

console.log('for: ', flatArray);

const flatMethod = matriz.flat(3);

console.log('flat: ', flatMethod);

const matriz2 = [
  [1, 2, 3],
  [4, 5, 6, [1, 2, 3, ['Hola', 'cómo', 'vas']]],
  [7, 8, 9],
];

function resolveArray(array) {
  let newFlatArray = [];
  for (let element of array) {
    if (Array.isArray(element)) {
      newFlatArray = newFlatArray.concat(resolveArray(element));
    } else {
      newFlatArray.push(element);
    }
  }

  return newFlatArray;
}

console.log(resolveArray(matriz2));
