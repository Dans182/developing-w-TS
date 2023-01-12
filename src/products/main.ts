import { addProduct, calcStock, products } from './products.services';

addProduct({
  title: 'Prod1',
  createdAd: new Date(2010, 1, 1),
  stock: 12,
});

addProduct({
  title: 'Prod2',
  createdAd: new Date(1990, 31, 3),
  stock: 18,
  size: 'L',
});

console.log(products);
const total = calcStock();
console.log(total);
