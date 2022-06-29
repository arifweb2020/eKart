import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Home/ProductSlice';
import SingleProductReducer from '../features/product-details/SingleProductSlice';
import cartReducer from './extraReducer/cartSlice';

export const store = configureStore({
  reducer: {
   products:productReducer,
   single_product:SingleProductReducer,
   cart:cartReducer.reducer,
  },
});
