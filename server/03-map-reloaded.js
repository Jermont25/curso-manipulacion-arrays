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
];

const rta = orders.map((item) => item.total);

/*const rta2 = orders.map((item) => {
  item.tax = 0.19;
  return item;
});*/

const rta3 = orders.map((item) => {
  return {
    ...item,
    tax: 0.19,
  };
});
console.log(orders);
console.log(rta);
//console.log(rta2);
console.log(rta3);
