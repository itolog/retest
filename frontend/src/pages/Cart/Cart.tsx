import React, { memo, useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import './cart.scss';

import { GET_PRODUCTS } from './gql';
import Error from '../../shared/components/Error/Error';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductSkeleton from '../../shared/UI/ProductSkeleton/ProductSkeleton';
import Layout from '../../shared/Layout/Layout';
import { Product } from '../../shared/generated/graphql';

// Store
import { Actions } from '../../store/products/actions';
import { getProducts } from '../../store/products/selectors';

const Cart: React.FC = memo(() => {
  const dispatch = useDispatch();
  const products = useSelector(getProducts);

  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS);

  const productsData: Product[] = (data && data.products) ?? [];

  useEffect(() => {
    if (productsData) {
      dispatch(Actions.fetchProductsAsync.request(productsData));
    }
  }, [productsData, loading]);

  const hendleRefetch = async () => {
    const { data } = await refetch();
    dispatch(Actions.fetchProductsAsync.request(data.products));
  };

  return (
    <Layout>
      <section className='cart-page'>
        {error && <Error message={error.message} />}
        <h1>Cart Page</h1>
        {loading && !productsData.length && <ProductSkeleton />}
        {!loading && productsData.length ? <ProductsList products={products} /> : null}

        {!loading && !products.length && (
          <button className='refetch-button' onClick={hendleRefetch}>
            обновить
          </button>
        )}
      </section>
    </Layout>
  );
});

export default Cart;
