import React from 'react';
import { Product } from '../../shared/generated/graphql';

interface Props {
  products: Product[]
}

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <ul>
      {products.map((item: Product) => {
        return (
          <li key={item.id}>{item.title}</li>
        );
      })}
    </ul>
  );
};

export default ProductsList;