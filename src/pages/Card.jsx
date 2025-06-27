import React, { useEffect, useLayoutEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Asynccarddelete, Asyncloadcard } from '../store/actions/CardAction'
import { RiDeleteBin6Line } from "react-icons/ri"
import { toast } from 'react-toastify'

const Card = () => {
  const products = useSelector((state) => state.cardReducer.products)
  console.log(products);
  
  const dispatch = useDispatch()

  useEffect(()=>{
     dispatch(Asyncloadcard());
  },[ ])




const carddelete = (id) => {
  if (!id) {
    console.error("Invalid ID:", id);
    return;
  }

  const stringId = id.toString();
  console.log("Deleting card with ID:", stringId);
   toast.error("deleted")
  dispatch(Asynccarddelete(stringId));
};
  
  if(products.length === 0){
    return <div>Loading.... </div>
  }

   
  return (
    <div className="p-6 max-w-5xl mx-auto relative">
      <h1 className="text-3xl font-extrabold text-gray-800 mb-6 text-center">🛒 Your Cart</h1>

      {products?.length === 0 ? (
        <div className="text-center text-gray-500 text-lg mt-20">
          <p>No items in your cart</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {products && products?.length > 0 &&  products?.map((item, index) => (
            <div
              key={index}
              className="flex bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-32 h-32 object-contain bg-gray-100 p-2"
              />
              <div className="flex flex-col justify-between p-4 flex-grow">
                <div>
                  <h2 className="text-lg font-semibold text-gray-800">{item.title}</h2>
                  <span className="inline-block text-sm bg-indigo-100 text-indigo-600 px-2 py-1 rounded-full mt-1">
                    {item.category}
                  </span>
                </div>
                <p className="text-xl font-bold text-indigo-600">${item.price}</p>
              </div>
              <div onClick={()=>carddelete(item.id)} className=' cursor-pointer relative top-30 right-3 text-lg' ><RiDeleteBin6Line /></div>
            </div>
          ))}
        </div>
      )}

      
    </div>
  )
}

export default Card

