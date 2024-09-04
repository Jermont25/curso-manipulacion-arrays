const words = ['spray', 'limit', 'elite', 'exuberant'];
const newArray = [];
for (let index = 0; index < words.length; index++) {
  const element = words[index];

  if (element.length >= 6) {
    newArray.push(element);
  }
}

const filterArray = words.filter((item) => item.length >= 6);

console.log('Original array: ', words);
console.log('New aray: ', newArray);
console.log('Filter array: ', filterArray);

const orders = [
  {
    customerName: 'Nicolás',
    total: 60,
    delivered: true,
  },
  {
    customerName: 'Thalia',
    total: 120,
    delivered: false,
  },
  {
    customerName: 'Marlon',
    total: 180,
    delivered: true,
  },
  {
    customerName: 'Santiago',
    total: 240,
    delivered: false,
  },
  {
    customerName: 'Santiago',
    total: 240,
    delivered: true,
  },
];

const deliveredArray = orders.filter(
  (item) => item.delivered && item.total >= 100
);

console.log(deliveredArray);

const searchOrder = (query) => {
  return orders.filter((item) => {
    return item.customerName.includes(query);
  });
};

console.log(searchOrder('San'));
