import React, { memo } from 'react';

import './qtyField.scss';

const QtyField: React.FC = memo(() => {
  return (
    <div className='quantity-field'>
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
  );
});

export default QtyField;