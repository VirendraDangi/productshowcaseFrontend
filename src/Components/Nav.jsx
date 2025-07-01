import React, { useState } from "react";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { HiMenu, HiX } from "react-icons/hi";
import { gsap } from "gsap";
 import { useGSAP } from '@gsap/react';

const Nav = () => {

   const tl = gsap.timeline() ;
 
   useGSAP(()=>{
     tl.from(".logo",{
       y:-50,
       opacity :0 ,
       duration:0.9,
       delay : 0.2,

      
     })
     tl.from(".nav",{
       y:-50,
       opacity :0 ,
       duration:0.6,
       stagger :0.3
     })
   })

  const user = useSelector((state) => state.user);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const navigter = () => {
    navigate("/");
    setOpen(false);
  };

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-blue-600 font-semibold"
      : "text-gray-700 hover:text-indigo-500";

  return (
    <header className="bg-white shadow-md sticky top-0 z-50 w-full">
      <div className="max-w-7xl mx-auto px-4 flex justify-between items-center h-16">
      
        <div
          onClick={navigter}
          className="text-xl logo  font-bold text-indigo-600 cursor-pointer"
        >
          ShopEase
        </div>

        <nav className=" nav hidden justify-center w-full md:flex space-x-10 font-medium">
          <NavLink to="/" className={`nav ${linkClass}`}>
            Home
          </NavLink>
          <NavLink to="/Products" className={`nav ${linkClass}`}>
            Products
          </NavLink>
          <NavLink to="/Card" className={`nav ${linkClass}`}>
            Cart
          </NavLink>
          <NavLink to="/Login" className={`nav ${linkClass}`}>
            Login
          </NavLink>
          <NavLink to="/CreateProduct" className={`nav ${linkClass}`}>
            Create Product
          </NavLink>
        </nav>


        <div className="md:hidden">
          <button onClick={() => setOpen(!open)}>
            {open ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden flex flex-col items-start px-6 py-4 space-y-3 bg-white shadow-md">
          <NavLink to="/" onClick={() => setOpen(false)} className={linkClass}>
            Home
          </NavLink>
          <NavLink
            to="/Products"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Products
          </NavLink>
          <NavLink
            to="/Card"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Cart
          </NavLink>
          <NavLink
            to="/Login"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Login
          </NavLink>
          <NavLink
            to="/CreateProduct"
            onClick={() => setOpen(false)}
            className={linkClass}
          >
            Create Product
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Nav;

