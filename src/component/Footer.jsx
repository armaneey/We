import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-[#003255] text-white mt-12">
        <div className="flex justify-center space-x-6 py-4">

  <a href="#" className="w-12 h-12 bg-no-repeat bg-contain transition duration-300 transform hover:scale-110"
    style={{ backgroundImage: "url('/facebook.png')" }}></a>

  <a href="#" className="w-12 h-12 bg-no-repeat bg-contain transition duration-300 transform hover:scale-110"
    style={{ backgroundImage: "url('/ig.png')" }}></a>

     <a href="#" className="w-12 h-12 bg-no-repeat bg-contain transition duration-300 transform hover:scale-110"
    style={{ backgroundImage: "url('/inkedin.png')" }} ></a>

<a href="#"className="w-12 h-12 bg-no-repeat bg-contain transition duration-300 transform hover:scale-110"
    style={{ backgroundImage: "url('/twitter.png')" }} ></a>
</div>


  <div
    className="relative bg-cover bg-center h-[60px] lg:h-[30px] flex items-center justify-center">
  </div>

  <div className="py-4 text-center g-5">
    <p className="text-lg"> © 2023 COM. All Rights Reserved.
    </p>

    <p className='text-400 lg:text-[14px] text-[12px] '>Designed BY MaRt, DeOracleEdge, Uyi, Iman</p> 
    
  </div>

</footer>
  )
}

export default Footer
