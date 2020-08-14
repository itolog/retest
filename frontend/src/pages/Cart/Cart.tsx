import React, { memo, useEffect, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch } from 'react-redux';

import './cart.scss';

import { GET_PRODUCTS } from './gql';
import { Product } from '../../shared/generated/graphql';
import Error from '../../shared/components/Error/Error';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductSkeleton from '../../shared/UI/ProductSkeleton/ProductSkeleton';
import Layout from '../../shared/Layout/Layout';

// Store
import {fetchProductsAsync} from '../../store/products/actions';

const Cart: React.FC = memo(() => {
  const dispatch = useDispatch();
  const [products, setProducts] = useState<Product[]>([]);

  const { loading, error, data } = useQuery(GET_PRODUCTS);

  useEffect(() => {

    if (!loading) {
      dispatch(fetchProductsAsync.request(data.products));
      setProducts(data.products);
    }
  }, [data, loading]);


  return (
    <Layout>
      <section className='cart-page'>
        {error && <Error message={error.message} />}
        <h1>Cart Page</h1>
        {!products.length && <ProductSkeleton />}
        {products.length && <ProductsList products={products} />}
      </section>
    </Layout>
  );
});

export default Cart;