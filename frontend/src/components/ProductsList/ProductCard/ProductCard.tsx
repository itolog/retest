import React, { memo } from 'react';
import { useDispatch } from 'react-redux';

import { Product } from '../../../shared/generated/graphql';
import ProductImage from '../../../shared/UI/ProductImage/ProductImage';
import QtyField from './QtyField/QtyField';

import './productCard.scss';

// Store
import { Actions } from '../../../store/products/actions';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = memo(({ product }) => {
  const dispatch = useDispatch();

  const handleDeleteProduct = () => {
    dispatch(Actions.removeProducts(product.id));
  };

  return (
    <li className='product-card'>
      {/* Product IMAGE */}
      <div className='product-card--img'>
        <ProductImage src={product.image} alt={product.title} h={80} />
      </div>

      {/* Product MAIN CONTENT */}
      <div className='product-content'>
        {/* Description */}
        <div className='product-info'>
          <h3 className='product-title'>{product.title}</h3>
          <p className='product-description'>{product.description}</p>
        </div>
        {/* Description END*/}
        {/* Actions */}
        <div className='product-actions'>
          <div className='product-action--left'>
            <QtyField
              product_id={product.id}
            />
            <span>{product.price} &#8372;</span>
          </div>

          <div className='product-action--right'>
            <button className='delete-button' onClick={handleDeleteProduct}>
              &#x1F5D1;
            </button>
          </div>
        </div>
        {/* Actions END*/}
      </div>
    </li>
  );
});

export default ProductCard;
