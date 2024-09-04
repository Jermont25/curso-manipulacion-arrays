const numbers = [1, 30, 49, 29, 10, 13];

let rta = false;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];

  if (element <= 50) {
    rta = true;
  }
}

console.log(rta);

const rta2 = numbers.every((item) => item <= 40);

console.log(rta2);

const team = [
  { name: 'Nicolas', age: 12 },
  { name: 'Andrea', age: 8 },
  { name: 'Zulema', age: 2 },
  { name: 'Santiago', age: 14 },
];

const teamEvaluationAge = team.every((item) => item.age < 15);

console.log(teamEvaluationAge ? 'El equipo es apto' : 'El equipo no es apto');
