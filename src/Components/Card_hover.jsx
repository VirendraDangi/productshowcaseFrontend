// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { AnimatePresence, motion } from "framer-motion";
// import { cn } from "../utils/cn"; // optional utility

// export const HoverEffect = ({ items, onAddToCart }) => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   return (
//     <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//       {items.map((item, idx) => (
//         <motion.div
//           key={item.id}
//           onMouseEnter={() => setHoveredIndex(idx)}
//           onMouseLeave={() => setHoveredIndex(null)}
//           initial={{ opacity: 0.98 }}
//           whileHover={{
//             scale: 1.05,
//             transition: { duration: 0.3 },
//           }}
//           className="bg-white rounded-xl shadow-md overflow-hidden relative transition duration-300"
//         >
//           {/* Hover Background Effect */}
//           <AnimatePresence>
//             {hoveredIndex === idx && (
//               <motion.span
//                 className="absolute inset-0 h-full w-full bg-white/50 rounded-xl z-0"
//                 layoutId="hoverBackground"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1, transition: { duration: 0.2 } }}
//                 exit={{ opacity: 0, transition: { duration: 0.2, delay: 0.1 } }}
//               />
//             )}
//           </AnimatePresence>

//           {/* Content */}
//           <div className="relative z-10">
//             <img
//               src={item.image}
//               alt={item.title}
//               className="h-48 w-full object-contain bg-gray-100 p-4"
//             />

//             <div className="p-4">
//               <h2 className="font-bold text-lg text-gray-800 truncate">{item.title}</h2>

//               <p className="text-gray-500 text-sm mt-1 line-clamp-2">
//                 {item.description}..
//               </p>

//               <small className="text-indigo-600 font-medium block">
//                 <Link to={`/Product/detail/${item.id}`}>more info</Link>
//               </small>

//               <div className="flex justify-between items-center mt-4">
//                 <span className="text-indigo-600 font-bold text-lg">${item.price}</span>
//                 <button
//                   onClick={() => onAddToCart && onAddToCart(item)}
//                   className="text-white bg-indigo-600 hover:bg-indigo-700 px-2 rounded-md py-0.5 cursor-pointer"
//                 >
//                   Add to cart
//                 </button>
//                 <span className="text-sm px-2 py-1 bg-indigo-100 text-indigo-600 rounded-full capitalize">
//                   {item.category}
//                 </span>
//               </div>
//             </div>
//           </div>
//         </motion.div>
//       ))}
//     </div>
//   );
// };
