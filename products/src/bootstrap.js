import { faker } from '@faker-js/faker';

const products = new Array(5)
  .fill(null)
  .map(() => `<div>${faker.commerce.product()}</div>`)
  .join('');

document.getElementById('dev-products').innerHTML = products;
