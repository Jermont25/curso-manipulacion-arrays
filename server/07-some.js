const numbers = [1, 2, 3, 4];

let rta = false;

for (let index = 0; index < numbers.length; index++) {
  const element = numbers[index];

  if (element % 2 === 0) {
    rta = true;
    break;
  }
}

const rta2 = numbers.some((item) => item % 2 === 0);

console.log(rta);
console.log(rta2);

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

const rta3 = orders.some((item) => item.delivered);

console.log(rta3);

const dates = [
  {
    startDate: new Date(2021, 1, 1, 10),
    endDate: new Date(2021, 1, 1, 11),
    title: 'Cita de trabajo',
  },
  {
    startDate: new Date(2021, 1, 1, 15),
    endDate: new Date(2021, 1, 1, 15, 30),
    title: 'Cita con mi jefe',
  },
  {
    startDate: new Date(2021, 1, 1, 20),
    endDate: new Date(2021, 1, 1, 21),
    title: 'Cena',
  },
];

const newAppointment = {
  startDate: new Date(2021, 1, 1, 10, 30),
  endDate: new Date(2021, 1, 1, 11),
};

import { areIntervalsOverlapping } from 'date-fns';

const isOverlap = (newAppointment) => {
  return dates.some((date) => {
    return areIntervalsOverlapping(
      {
        start: date.startDate,
        end: date.endDate,
      },
      {
        start: newAppointment.startDate,
        end: newAppointment.endDate,
      }
    );
  });
};

console.log('¿Colisiona?: ', isOverlap(newAppointment));
