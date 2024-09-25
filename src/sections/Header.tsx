import React from 'react'

export const Header = () => {
  return (
    <div className='flex justify-center items-center fixed top-3 w-full z-10'>
       <nav className='flex gap-1 p-0.5 border-white/15 rounded-full bg-white/10 backdrop-blur'>
          <a href="#" className='nav-item'>Home</a>
          <a href="#project"  className='nav-item'>Project</a>
          <a href="#about"  className='nav-item'>About</a>
          <a href="#contact"  className='nav-item bg-white text-gray-900 hover:bg-white/70  hover:text-gray-900'>Contact Us</a>
       </nav>
    </div>
  )
}

