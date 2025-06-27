import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products : []
}

const ProductSlice = createSlice({
   name : "product" ,
   initialState ,
   reducers : {
    loadproduct : (state,action) =>{
        state.products = action.payload
    } ,
       lazyloadproduct : (state,action) =>{
        state.products =[...state.products , ...action.payload] ;
    }
   }
})

export const {loadproduct , lazyloadproduct} = ProductSlice.actions ;
export default ProductSlice.reducer ;


