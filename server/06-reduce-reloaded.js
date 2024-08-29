const items = [1, 3, 2, 3, 3, 1, 10];

const rta = items.reduce((obj, item) => {
  if (!obj[item]) {
    obj[item] = 1;
  } else {
    obj[item] = obj[item] + 1;
  }

  return obj;
}, {});

console.log(rta);

const data = [
  {
    name: 'Nicolás',
    level: 'low',
  },
  {
    name: 'Andrea',
    level: 'medium',
  },
  {
    name: 'Zulema',
    level: 'hight',
  },
  {
    name: 'Santiago',
    level: 'low',
  },
  {
    name: 'Thalía',
    level: 'medium',
  },
  {
    name: 'Marlon',
    level: 'hight',
  },
];

const levelData = data
  .map((item) => item.level)
  .reduce((obj, item) => {
    if (!obj[item]) {
      obj[item] = 1;
    } else {
      obj[item] += 1;
    }

    return obj;
  }, {});

console.log(levelData);

const numbers = [1, 3, 4, 6, 7, 3, 8, 9, 10, 4, 2, 3, 9, 7, 5, 1, 5, 8];

const reduceRta = numbers.reduce(
  (obj, item) => {
    if (item < 5) {
      obj['1-4'] += 1;
    } else if (item < 9) {
      obj['5-8'] += 1;
    } else {
      obj['9-10'] += 1;
    }

    return obj;
  },
  {
    '1-4': 0,
    '5-8': 0,
    '9-10': 0,
  }
);

console.log(reduceRta);
