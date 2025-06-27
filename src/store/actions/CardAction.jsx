import { loadcard } from "../../reducer/CardSlice";
import axios from '../../Api/Axiosconfig'

export const Asyncloadcard = () => async (dispatch) => {
  try {
    const { data } = await axios.get("/card"); 
     
    dispatch(loadcard(data)); 
  } catch (error) {
    console.log(error);
  }
};


export const AsyncPostCart = (product) => async (dispatch) => {
  try {
      const { data } = await axios.post("/card", product); 
    dispatch(Asyncloadcard(data)); 
  } catch (error) {
    console.log(error);
  }
};


 export const Asynccarddelete = (id)=>async(dispatch,getState)=>{
      try { 
        await axios.delete("/card/" + id )
      dispatch(Asyncloadcard())
    } catch (error) {
      console.log(error);
    }
  }