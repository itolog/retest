import React, { memo, useState } from 'react';
import { useDispatch } from 'react-redux';

import './qtyField.scss';

const QtyField: React.FC = memo(() => {
  const dispatch = useDispatch();

  const [priceValue, setPriceValue] = useState<number>(0);

  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= 50) {
      setPriceValue(value);
    }
  };

  const handleMinus = () => {
    if (priceValue > 0) {
      setPriceValue(priceValue - 1);
    }
  };
  const handlePlus = () => {
    if (priceValue < 50) {
      setPriceValue(priceValue + 1);
    }
  };

  return (
    <div className='quantity-field'>
      <button className='product-action--btns' onClick={handleMinus}>
        -
      </button>
      <input
        className='input-price'
        type='number'
        placeholder='0'
        value={priceValue}
        min='0'
        max='50'
        onChange={handleChangePrice}
      />
      <button className='product-action--btns' onClick={handlePlus}>
        +
      </button>
    </div>
  );
});

export default QtyField;
