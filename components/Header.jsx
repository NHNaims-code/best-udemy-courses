import Link from 'next/link'
import Image from 'next/image'
import React, { useState } from 'react'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className='mx-auto bg-[#fdfdfd73] shadow-md backdrop-blur-md'>
      <div className='container mx-auto py-5'>
        <div className="flex justify-between items-center mx-4 md:mx-0">
          <div>
            <Image src='/logo.png' height={'40px'} width={'150px'} alt="Best Udemy Courses"/>
          </div>
          <ul className='hidden md:flex space-x-5'>
          <li>
            <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>Home</span></Link>          
          </li>
          <li>
            <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>Free Courses</span></Link>    
          </li>
          <li>
            <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>Best Course</span></Link>          
          </li>
          <li>
            <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>80% OFF</span></Link>          
          </li>
          <li>
            <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>About Us</span></Link>                               
          </li>
          <li>
            <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>Contact Us</span></Link>                    
          </li>
          </ul>
          <span className='block md:hidden' onClick={()=>{setMenuOpen(!menuOpen)}}><i className="icofont-navigation-menu"></i></span>
        </div>
        {/* Mobile Menu */}
        {
          menuOpen && 
          <div>
            <ul onClick={()=> {setMenuOpen(false)}} className='flex flex-col items-center space-y-4 md:hidden transition-all'>
              <li>
                <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>Home</span></Link>          
              </li>
              <li>
                <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>Free Courses</span></Link>    
              </li>
              <li>
                <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>Best Course</span></Link>          
              </li>
              <li>
                <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>80% OFF</span></Link>          
              </li>
              <li>
                <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>About Us</span></Link>                               
              </li>
              <li>
                <Link href='/'><span  className='font-bold cursor-pointer hover:text-[#f16126] transition-all'>Contact Us</span></Link>                    
              </li>
            </ul>
          </div>
        }

      </div>
    </div>
  )
}
