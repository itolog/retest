import React, { memo } from 'react';
import { Formik, FormikHelpers } from 'formik';

import InputControl from './InputControl/InputControl';
import { Values } from './types';

import './formShipping.scss';

import FormShippingSchema from './validate';

const FormShipping: React.FC = memo(() => {

  const handleSubmit = (values: Values, { setSubmitting, resetForm }: FormikHelpers<Values>) => {
    alert(JSON.stringify(values, null, 2));
  };

  return (
    <Formik
      initialValues={{
        name: '',
        adress: '',
        email: '',
        phone: '',
        shipping: 'Free shipping'
      }}
      validationSchema={FormShippingSchema}
      onSubmit={handleSubmit}
    >
      {({ handleSubmit, isSubmitting }) => (
        <form
          className='form'
          onSubmit={handleSubmit}>
          <InputControl
            label='name'
            name='name'
            type='text'
            placeholder='name'
          />
          <InputControl
            label='Adress'
            name='adress'
            type='text'
            placeholder='Evengreen terrace'
          />
          <InputControl
            label='Phone'
            type='text'
            name='phone'
            placeholder='+48'
          />

          <InputControl
            label='Email'
            name='email'
            type='text'
            placeholder='test@google.com'
          />

          {/*<select*/}
          {/*  name='shipping'*/}
          {/*  value={formik.values.shipping}*/}
          {/*  onChange={formik.handleChange}*/}
          {/*  onBlur={formik.handleBlur}*/}
          {/*  style={{ display: 'block' }}*/}
          {/*>*/}
          {/*  <option value='Free shipping' label='Free shipping' />*/}
          {/*  <option*/}
          {/*    value='Express shipping- additional 9.99 €'*/}
          {/*    label='Express shipping- additional 9.99 €'*/}
          {/*  />*/}
          {/*  <option*/}
          {/*    value='Courier shipping - additional 19.99 €'*/}
          {/*    label='Courier shipping - additional 19.99 €'*/}
          {/*  />*/}
          {/*</select>*/}
          <button
            // className={isValid ? 'pay-button' : 'pay-button disabled'}
            // disabled={!isValid}
            type='submit'
          >
            pay
          </button>
        </form>
      )}
    </Formik>
  );
});

export default FormShipping;
