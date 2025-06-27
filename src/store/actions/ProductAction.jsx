import axios from '../../Api/Axiosconfig'
import { loadproduct } from '../../reducer/ProductSlice';

 export const Asyncreateproduct = (product , )=> async(dispatch,getState)=>{
    try { 
        
        await  axios.post("/products" ,product)
     dispatch(Asyncloadproduct()) ;
     

    } catch (error) {
      console.log(error);
      
    }
  }

  export const Asyncloadproduct = ()=>async(dispatch,getState)=>{
      try { 
      const {data} = await axios.get("/products")
      dispatch(loadproduct(data))
    } catch (error) {
      console.log(error);
    }
  }

  export const Asyncupdateproduct = (id,product)=>async(dispatch,getState)=>{
      try { 
        await axios.patch("/products/" + id , product)
      dispatch(Asyncloadproduct())
    } catch (error) {
      console.log(error);
    }
  }

  export const Asyndeletehandler = (id)=>async(dispatch,getState)=>{
      try { 
        await axios.delete("/products/" + id)
      dispatch(Asyncloadproduct())
    } catch (error) {
      console.log(error);
    }
  }