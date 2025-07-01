import React from "react";
import { GoArrowRight } from "react-icons/go";
import { useNavigate } from "react-router-dom";
import ProductAccordion from "../Accordian/ProductAccordion"; 
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { BsYoutube } from "react-icons/bs";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


 gsap.registerPlugin(ScrollTrigger);

const Home = () => {

  const tl = gsap.timeline();
  const tl2 = gsap.timeline();
  
   useGSAP(()=>{
     tl.from(".imgText1",{
       y:30,
       opacity:0,
       delay:0.4,
       duration:1,
     }) 
      tl.from(".imgText2",{
       y:30,
       opacity:0,
       duration:1,
     }) 
   tl2.from(".page2txt1",{
       x:500,
       opacity:0,
       delay:1,
       duration:2,
       scrollTrigger:{
         trigger:".page2",
         scroller:"body",
           scrub:0.6
       }
     }) 
       tl2.from(".page2txt2",{
       x:-500,
       opacity:0,
       delay:1,
       duration:2,
       scrollTrigger:{
         trigger:".page2",
         end:"top 30%",
         scroller:"body",
           scrub:true
       }
     })
        tl2.from(".page2txt3",{
       y:300,
       opacity:0,
       delay:1,
       duration:2,
       scrollTrigger:{
         trigger:".page2",
         scroller:"body",
           scrub:true
       }
     })  
   })

  const navigate = useNavigate();
  const navi = () => {
    navigate("/products");
  };

  return (
    <div className="">
      <div className="h-screen m-5 md:m-0 md:overflow-x-hidden  rounded-4xl bg-[url('/10001.webp')] bg-cover bg-center flex items-center justify-center text-white text-4xl font-bold relative ">
        <div className="bg-opacity-60 flex flex-col items-center justify-center text-center px-4 absolute bottom-10">
          <p className="text-gray-300  text-lg md:text-xl max-w-2xl mb-6 drop-shadow-md imgText1 ">
            Your one-stop destination for premium lifestyle essentials. Explore
            our handpicked collections crafted to add value and style to your
            life.
          </p>
          <h1 className="text-gray-400 text-4xl md:text-6xl font-extrabold mb-4 drop-shadow-lg imgText2">
            Discover Quality Products
          </h1>

          {/* <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-6 py-3 rounded-xl shadow-lg transition duration-300">
          Explore Products
        </button> */}
        </div>
      </div>

      <div className=" inset-0 mt-50 bg-opacity-60 flex flex-col items-center justify-center text-center  px-4 page2 ">
        <h1 className="text-gray-700 text-4xl md:text-6xl font-extrabold mb-4 page2txt1 " >
          Elevate Your Everyday
        </h1>
        <p className="text-gray-600 text-lg md:text-xl max-w-3xl mb-6 page2txt2">
          Discover handpicked products that blend quality, innovation, and
          design — made to fit your lifestyle and built to impress.
        </p>
        <p className="text-gray-500 text-base md:text-lg max-w-2xl italic page2txt3">
          From tech to fashion, everything we showcase is curated with purpose
          and style in mind.
        </p>
      </div>

      <div className=" inset-0 mt-50 bg-opacity-60 flex flex-col items-center justify-center text-center px-4">
        <small className="text-gray-600 font-semibold max-w-3xl mb-2">
          Application
        </small>
        <h1 className="text-gray-700 text-xl font-semibold mb-4">
          Start shaping your tomorrow
        </h1>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center gap-y-10 gap-10 mt-2 font-light ">


        <div className=" bg-[#e0e0e0] group w-[70%]  md:w-[25%] h-80 rounded-2xl transition-all duration-600 ease-in-out scale-105">
          <img
            className="h-48 w-full object-cover bg-gray-100 rounded-2xl"
            src="/10001 (1).webp"
            alt=""
          />
          <p className="mt-4 text-center">stay your best stay self ,always</p>
          <style>
            {`
      .group:hover {
        box-shadow: 5px 5px 46px #5a5a5a, -5px -5px 46px #ffffff;
      }
    `}
          </style>
        </div>

        <div className="  bg-[#e0e0e0] group w-[70%]   md:w-[25%] h-80 rounded-2xl transition-all duration-600 ease-in-out scale-105">
          <img
            className="h-48 w-full object-cover bg-gray-100 rounded-2xl"
            src="/10002 (1).webp"
            alt=""
          />
          <p className="mt-4 text-center">
            Lorem ipsum dolor sit, amet consectetur adipisicing{" "}
          </p>
          <style>
            {`
      .group:hover {
        box-shadow: 5px 5px 46px #5a5a5a, -5px -5px 46px #ffffff;
      }
    `}
          </style>
        </div>

        <div className=" bg-[#e0e0e0] group w-[70%]  md:w-[25%] h-80 rounded-2xl transition-all duration-600 ease-in-out scale-105 ">
          <img
            className="h-48 w-full object-cover bg-gray-100 rounded-2xl"
            src="/10003.webp"
            alt=""
          />
          <p className="mt-4 text-center">
            Fule your cell <br /> for a supercharged life
          </p>
            <style>
              {`
        .group:hover {
          box-shadow: 5px 5px 46px #5a5a5a, -5px -5px 46px #ffffff;
        }
      `}
            </style>
        </div>

        {/* <div className='group bg-[#e0e0e0]  w-[20%] h-80 transition-all duration-600 ease-in-out '
 style={{
    borderRadius: "62px",
    // boxShadow: "5px 5px 46px #5a5a5a, -5px -5px 46px #ffffff"
  }}

   
  >
    <img className='h-48 w-full object-cover bg-gray-100 rounded-2xl' src="/10003.webp" alt="" />
     <p className='mt-4 text-center'>Fule your cell <br /> for a supercharged life</p>
 
   <style>
    {`
      .group:hover {
        box-shadow: 5px 5px 46px #5a5a5a, -5px -5px 46px #ffffff;
      }
    `}
  </style>
  </div> */}
      </div>

      <div className="mt-20 mb-20 flex justify-center items-center ">
        <button
          onClick={navi}
          className="group cursor-pointer bg-black px-12 py-4 rounded-3xl text-white flex items-center transition "
        >
          <span className="transform transition-all duration-300 group-hover:-translate-x-2">
            All Products
          </span>
          <span className="ml-2 transform transition-all duration-300 group-hover:translate-x-2">
            <GoArrowRight size={20} />
          </span>
        </button>
      </div>
      {/* 
  <div className="h-screen m-5  rounded-4xl bg-[url('/10001.jpg')] bg-cover bg-center text-center text-white text-4xl font-bold relative ">
 <p className='absolute left-[25%] top-25' >Meet Kini,the first wearable using <br /> non-invasive light technology <br /> to support and improve female longevity</p>
  <img className='h-[100vh] absolute left-[7%] ' src="https://cdn.prod.website-files.com/671898ae57fbee5bf1da9fba/673daf8686019b7dff3699ab_kini.webp"/>
 </div >

<div className='mt-20 px-4 flex flex-col md:flex-row justify-between items-start gap-8 max-w-6xl mx-auto ' >
  <div className='absolute left-28' >
    <p className='text-2xl opacity-50' >We believe in meaningful <br /> conversations. To help you out,<br /> we provide</p>
    <p className='text-2xl'  >a free 20-minute call <br /> to answer your questions.</p>
  </div>


</div> */}

  


   
 
    <div className="bg-black  py-10 flex flex-col items-center text-white justify-center gap-6">
 
  <div className="flex flex-wrap justify-center md:gap-20 space-x-10 text-4xl sm:text-5xl">
    <FiInstagram />
    <FaFacebook />
    <BsYoutube />
    <FaLinkedinIn />
  </div>

   <div className="flex flex-wrap justify-center gap-8 text-lg sm:text-2xl mt-4">
    <span className="cursor-pointer hover:underline">Home</span>
    <span className="cursor-pointer hover:underline">About</span>
    <span className="cursor-pointer hover:underline">Contact</span>
  </div>
</div>


      
     















    </div>
  );
};

export default Home;
