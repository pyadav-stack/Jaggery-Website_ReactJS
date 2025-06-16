// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // function Navbar() {
// //   return (
// //     <nav className="bg-yellow-700 text-white p-4">
// //       <div className="container mx-auto flex justify-between items-center">
// //         <Link to="/" className="text-2xl font-bold">Jaggery Delight</Link>
// //         <div className="space-x-4">
// //           <Link to="/" className="hover:text-yellow-300">Home</Link>
// //           <Link to="/about" className="hover:text-yellow-300">About</Link>
// //           <Link to="/products" className="hover:text-yellow-300">Products</Link>
// //           <Link to="/contact" className="hover:text-yellow-300">Contact Us</Link>
// //         </div>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // function Navbar() {
// //   return (
    
// //     <nav
// //       className="h-60 bg-cover bg-center flex items-center justify-between px-8 shadow-md"
// //       style={{
// //         backgroundImage: "url('https://cdn.shopify.com/s/files/1/0535/1188/0881/articles/Jaggery_design..jpg?v=1640862624')"
// //       }}
// //     >
// //       <h1 className=" absolute text-[8rem] font-bold text-yellow-600 opacity-20 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0">
// //         Kusum Overseas
// //       </h1>
      
// //       <h1 className="text-5xl font-bold text-brown "></h1>
// //       <div className="text-3xl font-bold text-black space-x-7">
// //         <Link to="/" className="text-white hover:underline">Home</Link>
// //         <Link to="/about" className="text-white hover:underline">About</Link>
// //         <Link to="/products" className="text-white hover:underline">Products</Link>
// //         <Link to="/contact" className="text-white hover:underline">Contact Us</Link>
// //       </div>
// //     </nav>
// //   );
// // }

// // export default Navbar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react'; // uses lucide icons for the hamburger

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav
//       className="relative h-60 bg-cover bg-center px-6 sm:px-10 shadow-md flex items-center justify-between"
//       style={{
//         backgroundImage:
//           "url('https://cdn.shopify.com/s/files/1/0535/1188/0881/articles/Jaggery_design..jpg?v=1640862624')",
//       }}
//     >
//       {/* Large Background Title */}
//       <h1 className="absolute text-[3rem] sm:text-[6rem] lg:text-[8rem] font-bold text-yellow-600 opacity-20 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 text-center">
//         Kusum Overseas
//       </h1>

//       {/* Toggle button for mobile */}
//       <div className="sm:hidden z-10">
//         <button onClick={() => setIsOpen(!isOpen)} className="text-white text-3xl">
//           {isOpen ? <X size={32} /> : <Menu size={32} />}
//         </button>
//       </div>

//       {/* Navigation Links */}
//       <div
//         className={`${
//           isOpen ? 'flex' : 'hidden'
//         } sm:flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-8 text-xl font-semibold text-brown-400 z-10 bg-brown/50 sm:bg-transparent px-4 py-4 sm:p-0 absolute sm:static top-full left-0 w-full sm:w-auto`}
//       >
//         <Link to="/" className="hover:underline text-brown-400" onClick={() => setIsOpen(false)}>
//           Home
//         </Link>
//         <Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>
//           About
//         </Link>
//         <Link to="/products" className="hover:underline" onClick={() => setIsOpen(false)}>
//           Products
//         </Link>
//         <Link to="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>
//           Contact Us
//         </Link>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { Menu, X } from 'lucide-react';

// function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav
//       className="relative h-60 bg-cover bg-center shadow-md px-6 sm:px-10"
//       style={{
//         backgroundImage:
//           "url('https://cdn.shopify.com/s/files/1/0535/1188/0881/articles/Jaggery_design..jpg?v=1640862624')",
//       }}
//     >
//       {/* Centered Background Title */}
//       <h1 className="absolute text-[2.5rem] sm:text-[5rem] lg:text-[7rem] font-bold text-yellow-600 opacity-20 left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 pointer-events-none select-none z-0 text-center">
//         Kusum Overseas
//       </h1>

//       <div className="relative z-10 flex justify-between items-center h-full">
//         {/* Left - Navigation Links (shown horizontally on larger screens) */}
//         <div className="hidden sm:flex flex-col justify-center">
//           <div className="flex flex-col space-x-2 text-lg font-bold text-black font-weight-300 sm:space-x-2">
//             <Link to="/" className="hover:underline">Home</Link>
//             <Link to="/about" className="hover:underline">About</Link>
//             <Link to="/products" className="hover:underline">Products</Link>
//             <Link to="/contact" className="hover:underline">Contact Us</Link>
//           </div>
//         </div>

//         {/* Right - Mobile menu toggle */}
//         <div className="sm:hidden flex items-center ml-auto">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-black text-3xl"
//             aria-label="Toggle Menu"
//           >
//             {isOpen ? <X size={32} /> : <Menu size={32} />}
//           </button>
//         </div>
//       </div>

//       {/* Mobile Dropdown Menu */}
//       {isOpen && (
//         <div className="absolute top-full left-0 w-full bg-yellow-800 text-black text-3xl font-weight-500 flex flex-col items-start px-6 py-4 space-y-2 sm:hidden z-20">
//           <Link to="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link>
//           <Link to="/about" className="hover:underline" onClick={() => setIsOpen(false)}>About</Link>
//           <Link to="/products" className="hover:underline" onClick={() => setIsOpen(false)}>Products</Link>
//           <Link to="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact Us</Link>
//         </div>
//       )}
//     </nav>
//   );
// }

// export default Navbar;
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="relative h-60 bg-cover bg-center shadow-md px-6 sm:px-10"
      style={{
        backgroundImage:
          "url('https://media.istockphoto.com/id/1417869194/video/organic-palm-jaggery-in-a-white-bowl-isolated-on-a-palm-leaf-with-selective-focus-and-copy.jpg?b=1&s=640x640&k=20&c=omuvisJt2ea9Kp84n05TjsVoPwageMr9lREFdBfyC_k=')",
      }}
    >
      {/* Background Title */}
      {/* <h1 className="absolute text-[1.5rem] sm:text-[5rem] lg:text-[6rem] font-bold text-lime-500  left-1/2 -translate-x-1/2 top-[0.5%] pointer-events-none select-none z-1 text-center tracking-tight leading-[0.9] ">
  Kusum<br />Overseas
</h1> */}
<h1 className="absolute text-[1.5rem] sm:text-[5rem] lg:text-[6rem] font-bold text-orange-700 
  left-4 sm:left-8 lg:left-12 top-[0.5%] pointer-events-none select-none z-10
  tracking-tight leading-[0.9] text-left">
  Kusum<br />Overseas
</h1>



     <div className="relative z-10 h-full">
  {/* Navigation Links aligned to right */}
  {/* <div className="hidden sm:flex flex-row items-center space-x-5 mb-1 text-4xl font-bold text-white absolute right-6 bottom-2 bg-black px-6 py-2 rounded-xl shadow-lg">
    <Link to="/" className="hover:underline">Home</Link> 
    <Link to="/about" className="hover:underline">About</Link>
    <Link to="/products" className="hover:underline">Products</Link>
    <Link to="/contact" className="hover:underline">Contact Us</Link>
  </div> */}
  <div className="hidden sm:flex flex-row items-center space-x-4 text-2xl font-semibold text-white absolute right-6 bottom-1">
  <Link to="/" className="bg-black/60 px-4 py-2 rounded-lg hover:bg-black/80 transition-all duration-200">Home</Link>
  <Link to="/about" className="bg-black/60 px-4 py-2 rounded-lg hover:bg-black/80 transition-all duration-200">About</Link>
  <Link to="/products" className="bg-black/60 px-4 py-2 rounded-lg hover:bg-black/80 transition-all duration-200">Products</Link>
  <Link to="/contact" className="bg-black/60 px-4 py-2 rounded-lg hover:bg-black/80 transition-all duration-200">Contact Us</Link>
</div>


  {/* Mobile Menu Button */}
  <div className="sm:hidden flex items-center ml-auto">
    <button
      onClick={() => setIsOpen(!isOpen)}
      className="text-black text-3xl"
      aria-label="Toggle Menu"
    >
      {isOpen ? <X size={32} /> : <Menu size={32} />}
    </button>
  </div>
</div>


      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-full right-0 w-full bg-yellow-300 text-brown-700 text-xl font-bold flex flex-col items-start px-6 py-4 space-y-3 sm:hidden z-20">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:underline">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="hover:underline">About</Link>
          <Link to="/products" onClick={() => setIsOpen(false)} className="hover:underline">Products</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:underline">Contact Us</Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
