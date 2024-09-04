const numbers = [1, 30, 49, 29, 10, 13];

let item = null;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];
  if (element === 30) {
    item = element;
    break;
  }
}

console.log(item);

const item2 = numbers.find((item) => item === 50);

console.log(item2);

const products = [
  {
    name: 'Pizza',
    price: 12,
    id: '🍕',
  },
  {
    name: 'Burger',
    price: 23,
    id: '🍔',
  },
  {
    name: 'Hot dog',
    price: 34,
    id: '🌭',
  },
  {
    name: 'Hot cakes',
    price: 355,
    id: '🥞',
  },
];

const product = products.findIndex((item) => item.id === '🍕');

console.log(product);
