import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#003255] text-white py-6  mt-20">
        <div className="flex justify-center items-center gap-4 py-4">


       <div className="border-t border-gray-400 my-4"></div>

  <a href="#" className="w-10 h-10 bg-no-repeat bg-contain transition duration-300 transform hover:scale-110"
    style={{ backgroundImage: "url('/facebook.png')" }}></a>

  <a href="#" className="w-10 h-10 bg-no-repeat bg-contain transition duration-300 transform hover:scale-110"
    style={{ backgroundImage: "url('/ig.png')" }}></a>

     <a href="#" className="w-10 h-10 bg-no-repeat bg-contain transition duration-300 transform hover:scale-110"
    style={{ backgroundImage: "url('/inkedin.png')" }} ></a>

<a href="#"className="w-10 h-10 bg-no-repeat bg-contain transition duration-300 transform hover:scale-110"
    style={{ backgroundImage: "url('/twitter.png')" }} ></a>
</div>


  <div className="py-4 text-center">
    <p className="text-sm lg: text-base"> © 2023 COM. All Rights Reserved.
    </p>

    <p className='text-xs lg:text-sm mt-1 '>Designed BY MaRt, DeOracleEdge, Uyi, Iman</p> 
    
  </div>

</footer>
  )
}

export default Footer
