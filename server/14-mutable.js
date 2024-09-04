const products = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

const searchProduct = products.findIndex((item) => item.id === '🍔');

if (searchProduct != -1) {
  myProducts.push(products[searchProduct]);
  products.splice(searchProduct, 1);
}

console.log('products', products);
console.log('myProducts', myProducts);
console.log('-'.repeat(10));

const newArray = products.filter((item) => item.id !== '🍔');

console.log(newArray);

//Update

const productsV2 = [
  { title: 'Pizza', price: 121, id: '🍕' },
  { title: 'Burger', price: 121, id: '🍔' },
  { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
  id: '🥞',
  changes: {
    price: 234,
    description: 'Delicius',
  },
};

const indexProduct = productsV2.findIndex((item) => item.id === '🥞');

productsV2[indexProduct] = {
  ...productsV2[indexProduct],
  ...update.changes,
};

const arrayChallenge = productsV2.map((item) => {
  const changesV2 = {
    id: '🥞',
    changes: {
      price: 500,
      description: 'Delicius pancakes',
    },
  };
  if (item.id === changesV2.id) {
    return {
      ...item,
      ...changesV2.changes,
    };
  }
  return item;
});

console.log(productsV2);
console.log('Challenge: ', arrayChallenge);
