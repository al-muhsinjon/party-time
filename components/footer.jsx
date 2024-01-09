import React from 'react'

const Footer = () => {
  return (
    

<footer className="bg-main-color  ">
  <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
    <div className="sm:flex sm:items-center sm:justify-between">
      <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
        <span className="self-center text-white text-2xl font-semibold whitespace-nowrap ">Party Time.</span>
      </a>
      <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 ">
        <li>
          <a href="/" className="hover:underline me-4 md:me-6">Home</a>
        </li>
        <li>
          <a href="#about" className="hover:underline me-4 md:me-6">About</a>
        </li>
        <li>
          <a href="#contact" className="hover:underline me-4 md:me-6">Contact</a>
        </li>
        <li>
          <a href="#pricing" className="hover:underline">Pricing</a>
        </li>
      </ul>
    </div>
    <hr className="my-6 border-gray-200 sm:mx-auto  lg:my-8" />
    <span className="block text-sm text-gray-500 sm:text-center ">© 2024 <a href="/" className="hover:underline">Party Time</a>. All Rights Reserved. <br /> <a href="https://github.com/al-muhsinjon" target='_blank' >Al_Muhsinjon_0</a> </span>
  </div>
</footer>



  )
}

export default Footer