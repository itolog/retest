import React from 'react';

import { Product } from '../../shared/generated/graphql';
import ProductCard from './ProductCard/ProductCard';

import './productList.scss';

interface Props {
  products: Product[];
}

const ProductsList: React.FC<Props> = ({ products }) => {
  return (
    <ul className='product-list'>
      {products.map((item: Product) => {
        return <ProductCard key={item.id} product={item} />;
      })}
    </ul>
  );
};

export default ProductsList;
