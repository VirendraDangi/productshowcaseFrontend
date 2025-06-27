import { Route, Routes } from 'react-router-dom'
import { lazy } from 'react'
const Card = lazy(()=>import('../pages/Card'))
const Home = lazy(()=>import( '../pages/Home'))
const Register = lazy(()=>import('../pages/Register'))
const Login = lazy(()=>import('../pages/Login'))
const Products = lazy(()=>import('../pages/Products'))
const ProductDetail = lazy(()=>import('../admin/ProductDetail'))
const CreateProduct = lazy(()=>import( '../admin/CreateProduct'))


const MainRoute = () => {
  return (
    <div>
        <Routes>
         <Route path = "/" element = {<Home/>} />
         <Route path = "/products" element = {<Products/>} />
          <Route path = "/login" element = {<Login/>} />
           <Route path = "/Card" element = {<Card/>} />
            <Route path = "/Register" element = {<Register/>} />
            <Route path = "/CreateProduct" element = {<CreateProduct/>} />
      <Route path = "/Product/detail/:id" element = {<ProductDetail/>} />
        </Routes>
    </div>
  )
}

export default MainRoute