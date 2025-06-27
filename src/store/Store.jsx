import { configureStore } from '@reduxjs/toolkit'
import UserSlice from '../reducer/UserSlice'
 import CardSlice from '../reducer/CardSlice'
 import ProductSlice from '../reducer/ProductSlice'
 
export const store = configureStore({
  reducer: {
    userReducer :  UserSlice ,
    cardReducer :  CardSlice ,
    productReducer : ProductSlice ,
  },
})