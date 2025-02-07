import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../redux/features/cart/cartSlice';
import booksApi from './features/books/booksApi';
import ordersApi from './features/orders/ordersApi';
// ✅ Ensure correct import path

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    [booksApi.reducerPath]: booksApi.reducer, // ✅ Correct way to register API reducer
    [ordersApi.reducerPath]: ordersApi.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(booksApi.middleware,ordersApi.middleware),
  devTools: process.env.NODE_ENV !== 'production', // ✅ Enable Redux DevTools only in development
});
