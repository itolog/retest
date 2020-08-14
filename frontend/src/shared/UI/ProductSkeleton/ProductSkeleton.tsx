import React, { memo } from 'react';

const ProductSkeleton: React.FC = memo(() => {
  return (
    <ul className='product-list'>
      {Array(3).fill(null).map((i, index) => {
        return (
          <li key={index} className='product-card'>
            <div className='product-card--img'>
              <div className='wrapp-image'>
                <div className='placeholder' style={{ width: '80px', height: '80px' }} />
              </div>

            </div>

            <div className='product-content'>
              <div className='placeholder' />
            </div>
          </li>
        );
      })}
    </ul>
  );
});

export default ProductSkeleton;