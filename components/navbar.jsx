// "use client";
// import { X } from "lucide-react";
// import React, { useState } from "react";
// const Navbar = () => {
//   const [show, setShow] = useState(false);

//   const suz = "Muhsinjon Mullajonov";

//   return (
//     <header className="fixed w-full z-50 bg-[#4e232376]">
//       <nav className=" border-gray-200 ">
//         <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 px-6">
//           <a
//             href="/"
//             className="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img src="/images/logo.png" className="h-16" alt="Logo" />
//           </a>
//           <button
//             onClick={() => setShow(!show)}
//             type="button"
//             className="inline-flex md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-white  focus:outline-none  "
//           >
//             <span className="sr-only">Open main menu</span>
//             {show ? (
//               <X />
//             ) : (
//               <svg
//                 className="w-5 h-5"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 17 14"
//               >
//                 <path
//                   stroke="currentColor"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M1 1h15M1 7h15M1 13h15"
//                 />
//               </svg>
//             )}
//           </button>
//           <div
//             className={`${show ? "" : "hidden"} w-full md:block md:w-auto`}
//             id="navbar-default"
//           >
//             <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   ">
//               <li>
//                 <a
//                   href="#"
//                   className="block py-2 px-3 text-white bg-main-color rounded md:bg-transparent md:text-main-color md:p-0  "
//                   aria-current="page"
//                 >
//                   Home
                  
//                 </a>
//               </li>
//               <li >
//                 <a
//                   href="#about"
//                   className="block py-2 px-3 text-main-color rounded hover:bg-main-color md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0  "
//                 >
//                   About
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#contact"
//                   className="block py-2 px-3 text-main-color rounded hover:bg-main-color md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0 "
//                 >
//                   Contact
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#pricing"
//                   className="block py-2 px-3  rounded hover:bg-main-color md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0 "
//                 >
//                   Pricing
//                 </a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </header>
//   );
// };

// export default Navbar;


"use client";
import { X } from "lucide-react";
import React, { useState } from "react";
const Navbar = () => {
  const [show, setShow] = useState(false);

  const suz = "Muhsinjon Mullajonov";

  return (
    <header className="fixed w-full z-50 bg-[#4e232376]">
      <nav className=" border-gray-200 ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2 px-6">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src="/images/logo.png" className="h-16" alt="Logo" />
          </a>
          <button
            onClick={() => setShow(!show)}
            type="button"
            className="inline-flex md:hidden items-center p-2 w-10 h-10 justify-center text-sm text-white  focus:outline-none  "
          >
            <span className="sr-only">Open main menu</span>
            {show ? (
              <X />
            ) : (
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            )}
          </button>
          <div
            className={`${show ? "" : "hidden"} w-full md:block md:w-auto`}
            id="navbar-default"
          >
            <ul className="font-medium flex flex-col p-2 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0   dark:border-gray-700">
              <li>
                <a
                  href="#"
                  className="block py-2 px-3 text-white bg-main-color rounded md:bg-transparent md:text-main-color md:p-0  "
                  aria-current="page"
                >
                  Home
                  
                </a>
              </li>
              <li >
                <a
                  href="#about"
                  className="block py-2 px-3 text-main-color rounded hover:bg-main-color md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0 dark:text-white md:dark:hover:text-main-color "
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="block py-2 px-3 text-main-color rounded hover:bg-main-color md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0 dark:text-white md:dark:hover:text-main-color "
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="block py-2 px-3 text-main-color rounded hover:bg-main-color md:hover:bg-transparent md:border-0 md:hover:text-main-color md:p-0 dark:text-white md:dark:hover:text-main-color "
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
