import { useState, useEffect, Fragment } from 'react';
import data from '../../assests/data.js'; 

const HomeContainer = () => {
  const [data, setProducts] = useState([]);

  useEffect(() => {
    
    setProducts(data);
  }, []); 
  return (
    <Fragment>
      <h1>All Products</h1>
      <ul>
        {data.map((product) => (
          <li key={product.id}>
           
            <p>{product.name}</p>
            <p>{product.description}</p>
            <p>{product.price}</p>
          </li>
        ))}
      </ul>
    </Fragment>
  );
};

export default HomeContainer;
