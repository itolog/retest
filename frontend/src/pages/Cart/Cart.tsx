import React, { memo, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';

import './cart.scss';

import { GET_PRODUCTS } from './gql';
import { Product } from '../../shared/generated/graphql';
import Error from '../../shared/components/Error/Error';
import ProductsList from '../../components/ProductsList/ProductsList';
import Layout from '../../shared/Layout/Layout';

const Cart: React.FC = memo(() => {
  const [products, setProducts] = useState<Product[]>([]);

  const { loading, error, data } = useQuery(GET_PRODUCTS );

  useEffect(() => {
    if(data) {
      setProducts(data.products);
    }
  }, [data]);

  if(error) return  <Error message={error.message} />;

  return (
    <Layout >
      <section className='cart-page'>
        <h1>Cart Page</h1>
        {loading ? <h1>LOADING ...</h1> : <ProductsList products={products} />}
      </section>
    </Layout>
  );
});

export default Cart;