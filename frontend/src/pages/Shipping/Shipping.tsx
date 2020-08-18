import React, { memo } from 'react';

import Layout from '../../shared/Layout/Layout';
import FormShipping from './FormShiping/FormShipping';

import './shipping.scss';

const Shipping: React.FC = memo(() => {
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