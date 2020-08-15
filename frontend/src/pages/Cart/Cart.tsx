import React, { memo, useEffect, useCallback, useState } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import './cart.scss';

import { GET_PRODUCTS } from './gql';
import Error from '../../shared/components/Error/Error';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductSkeleton from '../../shared/UI/ProductSkeleton/ProductSkeleton';
import Layout from '../../shared/Layout/Layout';

// Store
import { Actions } from '../../store/products/actions';
import { getProducts } from '../../store/products/selectors';

const Cart: React.FC = memo(() => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const [isLoaded, setIsLoaded] = useState(false);

  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS);

  const fetchData = useCallback(() => {
    if (data) {
      dispatch(Actions.fetchProductsAsync.request(data.products));
    }
  }, [data]);

  useEffect(() => {
    fetchData();
  }, [data]);

  useEffect(() => {
    if (!loading && products.length) {
      setIsLoaded(true);
    }
  }, [products, loading]);

  const hendleRefetch = async () => {
    const { data } = await refetch();
    dispatch(Actions.fetchProductsAsync.request(data.products));
  };

  return (
    <Layout>
      <section className='cart-page'>
        {error && <Error message={error.message} />}
        <h1>Cart Page</h1>
        {isLoaded && !products.length && (
          <button className='refetch-button' onClick={hendleRefetch}>
            обновить
          </button>
        )}
        {!isLoaded ? <ProductSkeleton /> : <ProductsList products={products} />}
        {/* {!loading ? <ProductsList products={products} /> : null} */}
      </section>
    </Layout>
  );
});

export default Cart;
