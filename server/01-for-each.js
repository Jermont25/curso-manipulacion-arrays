const letters = ['a', 'b', 'c'];

for (let index = 0; index < letters.length; index++) {
  const element = letters[index];
  console.log(`For: ${element}`);
}

letters.forEach((item) => console.log(`ForEach: ${item}`));

const tasks = [
  {
    title: 'Sacar basura',
    date: '21/08/2024',
    completed: false,
  },
  {
    title: 'Limpiar arena de los gatos',
    date: '22/08/2024',
    completed: true,
  },
  {
    title: 'Traer lo del desayuno',
    date: '21/08/2024',
    completed: false,
  },
];

const app = document.getElementById('app');

tasks.forEach((item) => {
  app.innerHTML += `
  <li>
  <input type="checkbox" id="exampleCheckbox" name="exampleCheckbox" ${item.completed ? 'checked' : ''}>
<label for="exampleCheckbox">${item.title}</label></li>`;
});
