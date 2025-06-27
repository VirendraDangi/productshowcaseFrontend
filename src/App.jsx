import React from 'react'
import{ useEffect } from "react";
import MainRoute from './Routes/MainRoute';
import Nav from './Components/Nav';
import { useDispatch } from 'react-redux';
import { Asyncloadproduct } from './store/actions/ProductAction';
import { AsynccurrentUser } from './store/actions/UserAction';
import { Asyncloadcard } from './store/actions/CardAction';
import Card from './pages/Card';


const App = () => {
const dispatch = useDispatch() ;

  useEffect(() => {
    dispatch(Asyncloadproduct())
    dispatch(AsynccurrentUser())
    dispatch(Asyncloadcard())
  
  }, [])
  
 


  return (
    <div>
      <Nav/>
 <MainRoute/>
    </div>
  )
}

export default App