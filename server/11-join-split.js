const elements = ['Fire', 'Air', 'Water'];

const separator = '--';
let rta = '';
for (let index = 0; index < elements.length; index++) {
  const element = elements[index];
  if (index === elements.length - 1) {
    rta = rta + element;
  } else {
    rta = rta + element + separator;
  }
  rta = rta + element + separator;
}

console.log(rta);

const rta2 = elements.join('--');

console.log(rta2);

const title = 'Curso de manipulación de arrays';

const FinalTitleUrl = title.split(' ').join('-').toLowerCase();

console.log(FinalTitleUrl);
