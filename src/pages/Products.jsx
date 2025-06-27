import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom';
import { Asyncloadcard, AsyncPostCart } from '../store/actions/CardAction';
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import axios from '../Api/Axiosconfig';
 import InfiniteScroll from 'react-infinite-scroll-component';
import { lazyloadproduct } from '../reducer/ProductSlice';
import { toast } from 'react-toastify';

const Products = () => {


  // const [products, setproducts] = useState([])
  const [hasmore, sethasmore] = useState(true)
    const navigate = useNavigate()

    const {products} = useSelector((state)=>state.productReducer) ;
   

const fetchproducts = async()=>{
    try {
      const {data} = await axios.get(`/products?_limit=6&_start=${products.length}`)
      if(data.length<6){
  
  sethasmore(false)
      }
      else{
        sethasmore(true)
       dispatch(lazyloadproduct(data))
      }
   
      
    } catch (error) {
      console.log(error);
      
    }
} 
useEffect(() => {
  fetchproducts()
}, [])




    
const dispatch = useDispatch()

const cardhandler = (product)=>{
  dispatch(AsyncPostCart(product));
  toast.success("Added")
   navigate("/Card")
}

  return (
    <div>
  <InfiniteScroll
   dataLength={products.length}
   next={fetchproducts}
   hasMore={hasmore}
     loader={<h4>Loading...</h4>}
    endMessage={
    <p style={{ textAlign: 'center' }}>
      <b>Yay! You have seen it all</b>
    </p>
  }
  >
     <div className="p-4 ">
      <h1 className="text-2xl font-bold text-center text-gray-700 mb-6">Product List</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl group overflow-hidden transition-all duration-400 ease-in-out hover:scale-105 "
            >
              <img
                src={product.image}
                alt={product.title}
                className="h-48 w-full object-contain bg-gray-100 p-4"
              />

              <div className="p-4">
                <h2 className="font-bold text-lg text-gray-800 truncate">{product.title}</h2>

                <p className="text-gray-500 text-sm mt-1 line-clamp-2">
                  {product.description}..
                
                </p>
                 <small className='text-indigo-600 font-medium'><Link to = {`/Product/detail/${product.id}`}>more info</Link></small>

                <div className="flex justify-between items-center mt-4">
                  <span className="text-indigo-600 font-bold text-lg">${product.price}</span>
                  <button
                  onClick={()=>cardhandler(product)}
                  className='text-white bg-indigo-600 hover:bg-indigo-700 px-2 rounded-md py-0.5 cursor-pointer'> Add to card</button>
                  <span className="text-sm px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full capitalize">
                    {product.category}
                  </span>
                </div>
              </div>
  <style>
              {`
        .group:hover {
          box-shadow: 5px 5px 46px #5a5a5a, -5px -5px 46px #ffffff;
        }
      `}
            </style>

            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">No products available</p>
        )}
      </div>
    </div>

  </InfiniteScroll>
           <div className="bg-black  py-10 flex flex-col items-center text-white justify-center gap-6">
          {/* Social Icons */}
          <div className="flex flex-wrap justify-center md:gap-20 space-x-10 text-4xl sm:text-5xl">
            <FiInstagram />
            <FaFacebook />
            <BsYoutube />
            <FaLinkedinIn />
          </div>
        
          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8 text-lg sm:text-2xl mt-4">
            <span className="cursor-pointer hover:underline">Home</span>
            <span className="cursor-pointer hover:underline">About</span>
            <span className="cursor-pointer hover:underline">Contact</span>
          </div>
        </div>
        


    </div>
  )
}

export default Products