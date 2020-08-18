import React, { memo, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Field, Formik, FormikHelpers } from 'formik';
import { useSelector } from 'react-redux';

import InputControl from './InputControl/InputControl';
import ActionButton from '../../../shared/UI/ActionButton/ActionButton';
import { Values } from './types';

import './formShipping.scss';

// Store
import { getTotalPrice } from '../../../store/orders/selectors';

import FormShippingSchema from './validate';

const FormShipping: React.FC = memo(() => {
  const totalPrice = useSelector(getTotalPrice) as number;

  const [selectValue, setSelectValue] = useState<string>('Free shipping');
  const [shippingPrice, setShippingPrice] = useState<number>(0);
  const [selectExpressValue, setSelectExpressValue] = useState<string>(
    'Express shipping- additional 9.99 €',
  );

  const handleSubmit = (values: Values, { setSubmitting }: FormikHelpers<Values>) => {
    alert(JSON.stringify(values, null, 2));
    setSubmitting(false);
  };

  const handleSelectChange = (e: React.SyntheticEvent<HTMLSelectElement>) => {
    const value = e.currentTarget.value;
    const regex = /\d+/g;
    const shippingValue = Number(value.match(regex)?.join('.')) || 0;

    setShippingPrice(shippingValue);

    setSelectValue(e.currentTarget.value);
  };

  useEffect(() => {
    if (totalPrice >= 300) {
      setSelectValue('Free express shipping');
      setSelectExpressValue('Free express shipping');
    }
  }, [totalPrice]);

  return (
    <>
      {!totalPrice && <Redirect to='/cart' />}

      <Formik
        initialValues={{
          name: '',
          adress: '',
          email: '',
          phone: '',
          shipping: selectValue,
        }}
        enableReinitialize={true}
        validationSchema={FormShippingSchema}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit, isSubmitting, isValid }) => (
          <form className='form' onSubmit={handleSubmit}>
            <InputControl label='name' name='name' type='text' placeholder='name' />
            <InputControl
              label='Adress'
              name='adress'
              type='text'
              placeholder='Evengreen terrace'
            />
            <InputControl label='Phone' type='text' name='phone' placeholder='+48' />

            <InputControl label='Email' name='email' type='text' placeholder='test@google.com' />

            <Field
              as='select'
              name='shipping'
              className='form-select'
              value={selectValue}
              onChange={handleSelectChange}
            >
              <option value='Free shipping'>Free shipping</option>
              <option value={selectExpressValue}>{selectExpressValue}</option>
              <option value='Courier shipping - additional 19.99 €'>
                Courier shipping - additional 19.99 €
              </option>
            </Field>

            <ActionButton
              title='оплатить'
              isValid={isValid}
              disabled={isSubmitting}
              type='submit'
            />

            <span className='form-shipping-total'>
              сумма с доставкой {totalPrice + shippingPrice} &#8372;
            </span>
          </form>
        )}
      </Formik>
    </>
  );
});

export default FormShipping;
