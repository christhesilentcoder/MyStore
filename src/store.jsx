import { configureStore } from '@reduxjs/toolkit';
import { productApi } from './services/productApi';
// import productReducer from '../features/products/productSlice';
import { setupListeners } from '@reduxjs/toolkit/query';
import cartsSlice from './features/carts/cartsSlice';

export const store = configureStore({
  reducer: {
    [productApi.reducerPath]: productApi.reducer,
    // products: productReducer,
    carts: cartsSlice,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(productApi.middleware),
  // devTools: process.env.NODE_ENV !== 'production',
});

setupListeners(store.dispatch);