import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Home/ProductSlice';
import SingleProductReducer from '../features/product-details/SingleProductSlice';

export const store = configureStore({
  reducer: {
   products:productReducer,
   single_product:SingleProductReducer,
  },
});
