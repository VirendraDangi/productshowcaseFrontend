 import { data } from 'react-router-dom';
import axios from '../../Api/Axiosconfig'
import { loaduser } from '../../reducer/UserSlice';

 
export const AsyncRegisterUser = (user)=>async(dispatch , getState)=>{
    try { 
      const res = await axios.post("/users",user)
      console.log(res);

    } catch (error) {
      console.log(error);
      
    }
  }

export const AsyncLoginUser = (user)=>async(dispatch , getState)=>{
    try { 
      const res = await axios.get(`/users?email=${user.email}&password=${user.password}`)
     localStorage.setItem("user",JSON.stringify(res.data[0]))
     console.log(res);
     
    } catch (error) {
      console.log(error);
      
    }
  }

  export const AsyncLogoutUser = (user)=>async(dispatch , getState)=>{
    try { 
     localStorage.removeItem("user")
     console.log(res);
     
    } catch (error) {
      console.log(error);
      
    }
  }
 

  export const AsynccurrentUser = (user)=>async(dispatch , getState)=>{
    try { 
   const user = JSON.parse(localStorage.getItem("user"))
   if(user) dispatch(loaduser(user))
    else console.log("user not login");
    
    //  console.log(res);
     
    } catch (error) {
      console.log(error);
      
    }
  }