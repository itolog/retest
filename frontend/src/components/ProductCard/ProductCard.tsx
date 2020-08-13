import React from 'react';
import { Product } from '../../shared/generated/graphql';

interface Props {
  product: Product
}

const ProductCard: React.FC<Props> = ({product}) => {
  return (
    <li>

    </li>
  );
};

export default ProductCard;