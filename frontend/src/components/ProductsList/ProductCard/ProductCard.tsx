import React, { memo } from 'react';

import { Product } from '../../../shared/generated/graphql';
import ProductImage from '../../../shared/UI/ProductImage/ProductImage';

import './productCard.scss';

interface Props {
  product: Product;
}

const ProductCard: React.FC<Props> = memo(({ product }) => {
  return (
    <li className='product-card'>
      <div className='product-card--img'>
        <ProductImage src={product.image} alt={product.title} />
      </div>

      <div className='product-info'>
        <h3 className='product-title'>{product.title}</h3>
        <p className='product-description'>{product.description}</p>
      </div>

      <div className='product-actions'>
        <div className='product-action--left'>
          <button
            className='product-action--btns'
            // onClick={handleMinus}
          >
            -
          </button>
          <input
            className='input-price'
            type='number'
            placeholder='0'
            // value={priceValue}
            min='0'
            max='50'
            // onChange={handleChangePrice}
          />
          <button
            className='product-action--btns'
            // onClick={handlePlus}
          >
            +
          </button>
        </div>

        <button
          className='delete-button'
          // onClick={handleDeleteProduct}
        >
          &#x1F5D1;
        </button>
        {/* <span>{data.price * priceValue} &#8372;</span> */}
      </div>
    </li>
  );
});

export default ProductCard;
