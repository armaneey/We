import React from 'react'

const ContactHero = () => {
  return (
    
      <header className="relative bg-cover bg-center h-[50vh] lg:h-[70vh] md:block" style={{ backgroundImage:"url('/contact.png') "}}>
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

     
      <nav className="absolute top-0 left-0 w-full flex justify-end p-6 space-x-6 text-white text-sm lg:text-base z-10">
        <a href="/" className="hover:underline transition duration-300">Home</a>
        <a href="/about" className="hover:underline transition duration-300">About Us</a>
        <a href="/gallery" className="hover:underline transition duration-300">Gallery</a>
        <a href="/contact" className="font-bold hover:underline transition duration-300">Contact Us</a>
      </nav>

      
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-3xl lg:text-6xl font-bold tracking-wide">CONTACT US</h1>
      </div>
    </header>
  );
};


export default ContactHero
