import { nanoid } from 'nanoid';
import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { Asyncreateproduct } from '../store/actions/ProductAction';
import { toast } from 'react-toastify';

const CreateProduct = () => {
    const dispatch = useDispatch()
      const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm();



const productCreator = (product)=>{
    product.id = nanoid()
    dispatch(Asyncreateproduct(product ))
      toast.success("Product created")
     reset()
}



  return (
    <div>
        <div className="  flex items-center justify-center p-4">
      <form
        onSubmit={handleSubmit(productCreator)}
        className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-lg space-y-6"
      >
        <h2 className="text-2xl font-bold text-gray-800 text-center">Add Product</h2>   

   
        <div>
          <label className="block text-gray-600 font-semibold mb-1">Title</label>
          <input
            type="text"
            {...register("title", { required: "Title is required" })}
            className={`w-full p-3 rounded-lg border ${
              errors.title ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            placeholder="Enter product title"
          />
          {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
        </div>


        <div>
          <label className="block text-gray-600 font-semibold mb-1">Price ($)</label>
          <input
            type="number"
            step="0.01"
            {...register("price", {
              required: "Price is required",
              min: { value: 0.1, message: "Price must be at least $0.10" }
            })}
            className={`w-full p-3 rounded-lg border ${
              errors.price ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            placeholder="Enter product price"
          />
          {errors.price && <p className="text-red-500 text-sm mt-1">{errors.price.message}</p>}
        </div>

   
        <div>
          <label className="block text-gray-600 font-semibold mb-1">Category</label>
          <input
            type="text"
            {...register("category", { required: "Category is required" })}
            className={`w-full p-3 rounded-lg border ${
              errors.category ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            placeholder="e.g. men's clothing"
          />
          {errors.category && <p className="text-red-500 text-sm mt-1">{errors.category.message}</p>}
        </div>


        <div>
          <label className="block text-gray-600 font-semibold mb-1">Image URL</label>
          <input
            type="url"
            {...register("image", {
              required: "Image URL is required",
            //   pattern: {
            //     value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/i,
            //     message: "Enter a valid image URL"
            //   }
            })}
            className={`w-full p-3 rounded-lg border ${
              errors.image ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            placeholder="https://image-url.com/product.jpg"
          />
          {errors.image && <p className="text-red-500 text-sm mt-1">{errors.image.message}</p>}
        </div>

      
        <div>
          <label className="block text-gray-600 font-semibold mb-1">Description</label>
          <textarea
            {...register("description", { required: "Description is required" })}
            rows={4}
            maxLength={300}
            className={`w-full p-3 rounded-lg border ${
              errors.description ? 'border-red-500' : 'border-gray-300'
            } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
            placeholder="Enter product description"
          />
          {errors.description && <p className="text-red-500 text-sm mt-1">{errors.description.message}</p>}
        </div>

        <button
          type="submit"
          className={`w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition`}
        >
        Submit Product
        </button>
      </form>
    </div>
    </div>
  )
}

export default CreateProduct