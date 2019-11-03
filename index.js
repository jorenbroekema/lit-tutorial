import { render, html } from 'lit-html';

const farmAnimals = {
  cow: {
    animalName: 'Cow',
    emoji: '🐄',
    legs: 4,
    skinPattern: 'Black and white dots',
    products: 'meat & dairy',
    mammal: true,
    existingCows: ['Berta', 'Truus']
  }
};

const template = data => html`
  <style>
    .container {
      padding: 25px;
      display: inline-block;
      background-color: lightgrey;
      border-radius: 5px;
      box-shadow: 0 5px 5px black;
    }
  </style>
  <div class="container">
    <h3>${data.animalName} ${data.emoji}</h3>
    <p>Characteristics:</p>
    <ul>
      <li>${data.legs} legs</li>
      <li>${data.skinPattern}</li>
      <li>Used for ${data.products}</li>
      ${data.mammal
        ? html`
            <li>Is a mammal</li>
          `
        : html``}
    </ul>
    <p>Cows in the farm:</p>
    <ul>
      ${data.existingCows.map(
        name =>
          html`
            <li>${name}</li>
          `
      )}
    </ul>
  </div>
`;

const app = document.getElementById('app');

render(template(farmAnimals.cow), app);

/* setTimeout(() => {
  farmAnimals.cow.existingCows.push('Bob');
  render(template(farmAnimals.cow), app);
}, 2000); */

/* import './tea-shop/tea-shop.js';
render(
  html`
    <tea-shop
      .brands=${['Earl Grey', 'English Breakfast', 'Mandarin Orange']}
      city="London"
      has-english-breakfast
    ></tea-shop>
  `,
  app
); */

import './hello-world/hello-world.js';

render(
  html`
    <hello-world mood="happy"></hello-world>
  `,
  app
);
