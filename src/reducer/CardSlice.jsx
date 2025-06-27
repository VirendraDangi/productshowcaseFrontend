import { createSlice } from "@reduxjs/toolkit";
import Products from "../pages/Products";


const CardSlice = createSlice({
   name : "card" ,
   
   initialState:{
    products : [] ,
   },


   reducers: {
    loadcard : (state,action) =>{
          state.products = action.payload;
    },
   },
})

export const {loadcard} = CardSlice.actions ;
export default CardSlice.reducer ;

// import { createSlice } from "@reduxjs/toolkit";

// const cardSlice = createSlice({
//   name: "card",
//   initialState: {
//     products: [],
//   },
//   reducers: {
//     loadcard: (state, action) => {
//       state.products.push(action.payload);
//     },
//   },
// });

// export const { loadcard } = cardSlice.actions;
// export default cardSlice.reducer;