import React from 'react'
import { useForm } from 'react-hook-form';
import { NavLink, useNavigate } from 'react-router-dom';
import { nanoid } from 'nanoid';
import{AsyncRegisterUser} from '../store/actions/UserAction'
import {useDispatch} from 'react-redux'

const Register = () => {
   const { register, handleSubmit, formState: { errors } } = useForm();
   const dispatch = useDispatch()
const navigate = useNavigate() ;

   const submitHandler = (user) =>{
       const userid = nanoid() ;
       console.log(user);
       dispatch(AsyncRegisterUser(user))
       navigate("/login")
   }

  return (
    <div>
       <div className="h-4/5 flex items-center justify-center mt-15  ">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Register</h2>

        <form onSubmit={handleSubmit(submitHandler)} 
        className="space-y-5">
          <div>
            <label className="block mb-1 font-semibold text-gray-700">Username</label>
            <input
              type="text"
               autoComplete="username"
              {...register("username", { required: true })}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.username ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.username && <p className="text-red-500 text-sm mt-1">Username is required</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.email ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">Email is required</p>}
          </div>

          <div>
            <label className="block mb-1 font-semibold text-gray-700">Password</label>
            <input
              type="password"
                autoComplete="current-password"
              {...register("password", { required: true })}
              className={`w-full px-4 py-2 rounded-md border ${
                errors.password ? 'border-red-500' : 'border-gray-300'
              } focus:outline-none focus:ring-2 focus:ring-indigo-500`}
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">Password is required</p>}
          </div>
             <p> Already have an account. <NavLink className={"text-blue-500"} to = "/login">Login here</NavLink></p>
          <button
          //  onClick={()=>submitHandler}
            type="submit"
            className="w-full cursor-pointer bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register