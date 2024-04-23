import { products } from '../../assests/data.js';

export const loadProducts = () => ({
  type: 'LOAD_PRODUCTS',
  payload: products,
});

export const getProductDetailsById = (productId) => {
  const product = products.find((product) => product.id === productId);

  return {
    type: 'GET_PRODUCT_DETAILS',
    payload: products, 
  };
};
