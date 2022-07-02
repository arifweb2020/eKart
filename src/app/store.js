import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/Home/ProductSlice';
import SingleProductReducer from '../features/product-details/SingleProductSlice';
import cartReducer from './extraReducer/cartSlice';
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const reducer = combineReducers({
  products:productReducer,
   single_product:SingleProductReducer,
   cart:cartReducer.reducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = configureStore({
  reducer:  persistedReducer,
  
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});


export default store;
