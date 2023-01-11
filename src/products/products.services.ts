import { product } from './products.model';

const products: product[] = [];

const addProduct = (data: product) => {
  products.push(data);
};
