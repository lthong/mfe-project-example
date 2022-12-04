import { faker } from '@faker-js/faker';

const products = `<div>${faker.random.numeric()} items</div>`;
document.getElementById('dev-cart').innerHTML = products;
