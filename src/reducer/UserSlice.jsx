import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    data : [],
    name : ""
}

const UserSlice = createSlice({
   name : "user" ,
   initialState ,
   reducers : {
    loaduser : (state,action) =>{
        state
    },
    loadName :  (state,action) =>{
        state
    }
   }
})

export const {loaduser} = UserSlice.actions ;
export default UserSlice.reducer ;