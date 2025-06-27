import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Asyncupdateproduct, Asyndeletehandler } from "../store/actions/ProductAction";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";



const ProductDetail = () => {
    const navigate = useNavigate()
  const [Isedit, setIsedit] = useState(false);
  const [showfullimage, setshowfullimage] = useState(false)

  const handleclickimage = () =>{
      setshowfullimage(true)
  }
   const handleClose = () =>{
      setshowfullimage(false)
  }

  const edithandler = () => {
    setIsedit(true);
    console.log(Isedit);
  };

  const { id } = useParams();
   console.log(id);
   
  const products = useSelector((state) => state.productReducer.products);
  const product = products?.find((product) => product.id === id);
  console.log(product);

  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      image: product?.image,
       title: product?.title,
        description: product?.description,
         price: product?.price,
          category: product?.category,
    },
  });

  

  const productupdater = (product) => {
    dispatch(Asyncupdateproduct(id , product));
      toast.success("Product updated")
    setIsedit(false)
  };

  const deletehandler = ()=>{
     dispatch(Asyndeletehandler(id))
      toast.warning("Product delete")
 navigate("/products")
 
  }

  return (
    <div className="w-full mt-8  ">
        <div className="w-[30vw] overflow-x-hidden ml-10 h-full relative bg-white rounded-2xl group  overflow-hidden hover:shadow-2xl transition-all duration-300 hover:scale-100">       
        <div>   
         
          <img     
            onClick={handleclickimage}     
            src={product.image}     
            alt={product.title}     
            className="w-full h-60 object-cover cursor-pointer transition-transform duration-200 hover:scale-105"   
          />    
        </div>
                    
        <div className="p-5">
          <h3 className="text-xl font-bold text-gray-800 truncate">
            {product.title}
          </h3>
           
          <p className="text-sm text-gray-500 mt-2 line-clamp-2">
            {product.description.length > 100
              ? product.description.slice(0, 100) + "..."
              : product.description}
          </p>
           
          <div className="flex justify-between items-center mt-4">
            <span className="text-indigo-600 font-bold text-lg">
              ${product.price}
            </span>
            <span className="text-sm bg-indigo-100 text-indigo-600 px-3 py-1 rounded-full capitalize">
              {product.category}
            </span>
          </div>
          
          <div className="flex items-center justify-between mt-5">
            <button
              onClick={edithandler}
              className="text-center text-white bg-indigo-500 cursor-pointer hover:bg-indigo-700 px-2 py-1 rounded-md transition-colors duration-200"
            >
              edit product
            </button>
            <button 
              onClick={deletehandler}
              className="text-center text-white hover:bg-red-700 cursor-pointer bg-red-500 px-2 py-1 rounded-md transition-colors duration-200"
            >
              delete product
            </button>
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

   
      {showfullimage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center"
          role="dialog"
          aria-modal="true"
          onClick={handleClose}
        >
          {/* Image Container */}
          <div 
            className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={product.image}
              alt="Full Product"
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            
            {/* Close Button */}
            <button
              onClick={handleClose}
              className="absolute -top-12 right-0 text-white text-4xl font-bold hover:text-gray-300 transition-colors duration-200 bg-black bg-opacity-50 rounded-full w-10 h-10 flex items-center justify-center"
              aria-label="Close fullscreen image"
            >
              ×
            </button>
          </div>
        </div>

        )}


      {Isedit ? (
        <div  className="absolute inset-0 top-24 w-[40vw] left-[40%]">
          <form
            onSubmit={handleSubmit(productupdater)}
            className=" shadow-xl rounded-2xl h-[90vh]  overflow-hidden w-full overflow-y-auto p-8 space-y-6"
          >
            <h2 className="text-2xl font-bold text-gray-800 text-center">
              Add Product
            </h2>

            <div>
              <label className="block text-gray-600 font-semibold mb-1">
                Title
              </label>
              <input
                type="text"
                {...register("title", { required: "Title is required" })}
                className={`w-full p-3 rounded-lg border ${
                  errors.title ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                placeholder="Enter product title"
              />
              {errors.title && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-1">
                Price ($)
              </label>
              <input
                type="number"
                step="0.01"
                {...register("price", {
                  required: "Price is required",
                  min: { value: 0.1, message: "Price must be at least $0.10" },
                })}
                className={`w-full p-3 rounded-lg border ${
                  errors.price ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                placeholder="Enter product price"
              />
              {errors.price && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-1">
                Category
              </label>
              <input
                type="text"
                {...register("category", { required: "Category is required" })}
                className={`w-full p-3 rounded-lg border ${
                  errors.category ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                placeholder="e.g. men's clothing"
              />
              {errors.category && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.category.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-1">
                Image URL
              </label>
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
                  errors.image ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                placeholder="https://image-url.com/product.jpg"
              />
              {errors.image && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.image.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-gray-600 font-semibold mb-1">
                Description
              </label>
              <textarea
                {...register("description", {
                  required: "Description is required",
                })}
                rows={4}
                maxLength={300}
                className={`w-full p-3 rounded-lg border ${
                  errors.description ? "border-red-500" : "border-gray-300"
                } focus:outline-none focus:ring-2 focus:ring-indigo-400`}
                placeholder="Enter product description"
              />
              {errors.description && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className={`w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg hover:bg-indigo-700 transition`}
            >Update</button>
          </form>
        </div>
      ) : null}
    </div>
  );
};

export default ProductDetail;
