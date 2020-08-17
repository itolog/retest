import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import Layout from '../../shared/Layout/Layout';
import FormShipping from './FormShiping/FormShipping';

import './shipping.scss';

// Store
import { getTotalPrice } from '../../store/orders/selectors';

const Shipping: React.FC = memo(() => {
  const totalPrice = useSelector(getTotalPrice);

  return (
    <Layout>
      <section className='shipping-page'>
        <h1>Shipping Page</h1>

        <FormShipping />
      </section>

    </Layout>
  );
});

export default Shipping;