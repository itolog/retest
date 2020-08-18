import React, { memo, useCallback, useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import './qtyField.scss';

// Store
import { Actions } from '../../../../store/orders/actions';

interface Props {
  product_id: number;
}

const QtyField: React.FC<Props> = memo(({ product_id }) => {
  const dispatch = useDispatch();

  const [priceValue, setPriceValue] = useState<number>(1);

  useEffect(() => {
    if (priceValue > 0 && priceValue <= 50) {
      dispatch(
        Actions.updateQuantity({
          product_id,
          quantity: priceValue,
        }),
      );
    }
  }, [priceValue, product_id, dispatch]);

  const handleChangeProductQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(e.target.value);
    if (value <= 50) {
      setPriceValue(value);
    }
  };

  const handleMinus = useCallback(() => {
    if (priceValue > 1) {
      setPriceValue(priceValue - 1);
    }
  }, [priceValue]);

  const handlePlus = useCallback(() => {
    if (priceValue < 50) {
      setPriceValue(priceValue + 1);
    }
  }, [priceValue]);

  return (
    <div className='quantity-field'>
      <button className='product-action--btns' onClick={handleMinus}>
        -
      </button>
      <input
        className='input-price'
        type='number'
        placeholder='1'
        value={priceValue}
        min='1'
        max='50'
        onChange={handleChangeProductQty}
      />
      <button className='product-action--btns' onClick={handlePlus}>
        +
      </button>
    </div>
  );
});

export default QtyField;
