/**
 * Redux Slice/State for score card report.
 *
 * Author : Arif
 */
 import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


 const initialState = {
     status: null,
     isLoading: true,
     message: "",
     data: [],
 };
 
 /**
 * Async Thunk for send OTP 
 */
 export const productsAsync = createAsyncThunk(
     "products/fetchProducts",
     async (args) => {
         try {
             const res = await fetch('https://fakestoreapi.com/products')
             const res1 = await res.json()
             return res1
         }
         catch (err) {
             alert("some thing wend wrong")
         }
 
     }
 );
 
 
 export const ProductSlice = createSlice({
     name: "products",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
         builder
             .addCase(productsAsync.pending, (state) => {
                 state.data = null;
                 state.isLoading = true;
                 state.status = null;
             })
             .addCase(productsAsync.fulfilled, (state, action) => {
                 // merging new state with initialState to preserve the default values where no data received
                 state.data = action.payload;
                 state.isLoading = false;
                 state.status = "SUCCESS";
             })
             .addCase(productsAsync.rejected, (state, action) => {
                 // action.error.message is available in rejected status only.
                 //  console.error(
                 //      "API ERROR : invoice login error" + action.error.message
                 //  );
                 state.message = action.error.message;
                 state.data = null;
                 state.isLoading = false;
                 state.status = "REJECTED";
             })
 
     },
 });
 
 export default ProductSlice.reducer;