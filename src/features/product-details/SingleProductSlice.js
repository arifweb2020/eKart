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
     data: {},
 };
 
 /**
 * Async Thunk for send OTP 
 */
 export const SingleProductSAsync = createAsyncThunk(
     "singleProdcuts/fetchProducts",
     async (id) => {
         try {
             const res = await fetch(`https://fakestoreapi.com/products/${id}`)
             const res1 = await res.json()
             return res1
         }
         catch (err) {
             alert("some thing wend wrong")
         }
 
     }
 );
 
 
 export const SingleProductSlice = createSlice({
     name: "single_product",
     initialState,
     reducers: {},
     extraReducers: (builder) => {
         builder
             .addCase(SingleProductSAsync.pending, (state) => {
                 state.data = null;
                 state.isLoading = true;
                 state.status = null;
             })
             .addCase(SingleProductSAsync.fulfilled, (state, action) => {
                 // merging new state with initialState to preserve the default values where no data received
                 state.data = action.payload;
                 state.isLoading = false;
                 state.status = "SUCCESS";
             })
             .addCase(SingleProductSAsync.rejected, (state, action) => {
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
 
 export default SingleProductSlice.reducer;