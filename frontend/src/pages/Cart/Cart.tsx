import React, { memo, useEffect, useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { useDispatch, useSelector } from 'react-redux';

import './cart.scss';

import { GET_PRODUCTS } from './gql';
import Error from '../../shared/components/Error/Error';
import ProductsList from '../../components/ProductsList/ProductsList';
import ProductSkeleton from '../../shared/UI/ProductSkeleton/ProductSkeleton';
import Layout from '../../shared/Layout/Layout';
import ActionButton from '../../shared/UI/ActionButton/ActionButton';

// Store
import { Actions } from '../../store/products/actions';
import { getProducts } from '../../store/products/selectors';
import { getTotalPrice } from '../../store/orders/selectors';
import { Actions as orderActions } from '../../store/orders/actions';

const Cart: React.FC = memo(() => {
  const history = useHistory();

  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const totalPrice = useSelector(getTotalPrice) as number;

  const [isLoaded, setIsLoaded] = useState(false);

  const { loading, error, data, refetch } = useQuery(GET_PRODUCTS);

  const fetchData = useCallback(() => {
    if (data) {
      dispatch(Actions.fetchProductsAsync.request(data.products));
    }
  }, [data, dispatch]);

  useEffect(() => {
    fetchData();
  }, [data]);

  useEffect(() => {
    if (!loading && products.length) {
      setIsLoaded(true);
    }
  }, [products, loading]);

  // UPDATE TOTAL PRICE
  useEffect(() => {
    dispatch(orderActions.updateTotalPrice(totalPrice));
  }, [totalPrice, dispatch]);

  const handleRefetch = async () => {
    const { data } = await refetch();
    dispatch(Actions.fetchProductsAsync.request(data.products));
  };

  const handleBuy = () => {
    history.push('/shipping');
  };

  return (
    <Layout>
      <section className='cart-page'>
        {error && <Error message={error.message} />}
        <h1>Cart Page</h1>
        {isLoaded && !products.length && <ActionButton title='обновить' handler={handleRefetch} />}
        {!isLoaded ? <ProductSkeleton /> : <ProductsList products={products} />}
        {/* BUY SECTION */}
        {products.length ? (
          <div className='section-buy'>
            <span className='total-price'>{totalPrice} &#8372;</span>
            <ActionButton title='Заказать' handler={handleBuy} />
          </div>
        ) : null}
      </section>
    </Layout>
  );
});

export default Cart;
